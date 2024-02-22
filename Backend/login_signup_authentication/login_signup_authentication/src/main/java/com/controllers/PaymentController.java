package com.controllers;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import com.dto.ApiResponse;
import com.dto.ApiResponseDTO;
import com.exception.OrderException;
import com.models.Order;
import com.models.PaymentLinkResponse;
import com.razorpay.Payment;
import com.razorpay.PaymentLink;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import com.repository.OrderRepository;
import com.services.OrderService;
import com.services.UserService;
//
//@RestController
//@RequestMapping("/api")
//@CrossOrigin(origins="http://localhost:3000", allowCredentials = "true")
//public class PaymentController {
//
//	@Value("${razorpay.api.key}")
//	String apiKey;
//	
//	@Value("${razorpay.api.secret}")
//	String apiSecret;
//	
//	@Autowired
//	private OrderService orderService;
//	
//	@Autowired
//	private UserService userService;
//	
//	@Autowired
//	private OrderRepository orderRepository;
//	
//	@PostMapping("/payments/{orderId}")
//	public ResponseEntity<PaymentLinkResponse> createPaymentLink(@PathVariable Integer orderId, @RequestHeader("Authorization") String jwt) throws OrderException, RazorpayException{
//		Order order = orderService.findOrderById(orderId);
//		
////		public void createPaymentLink(@PathVariable Integer orderId ) throws OrderException, RazorpayException{
////			Order order = orderService.findOrderById(orderId);
//		System.out.println(jwt);
//		System.out.println(order);
//		try {
//			RazorpayClient razorpay = new RazorpayClient(apiKey, apiSecret);
//			
//			JSONObject paymentLinkRequest = new JSONObject();
//			
//			paymentLinkRequest.put("amount", Math.ceil( order.getTotalPrice()*100));
//			paymentLinkRequest.put("currency", "INR");
//			System.out.println(62);
//			System.out.println("orderId"+orderId);
//			JSONObject customer = new JSONObject();
//			
//			customer.put("name", order.getUser().getFirstName());
//			customer.put("email", order.getUser().getEmail());
//			paymentLinkRequest.put("customer", customer);
//			System.out.println(68);
//			JSONObject notify = new JSONObject();
//			
//			notify.put("sms", true);
//			notify.put("email", true);
//			paymentLinkRequest.put("notify", notify);
//			System.out.println(73);
//			paymentLinkRequest.put("callback_url", "http://localhost:3000/payment/"+orderId);
//			paymentLinkRequest.put("callback_method", "get");
//			
//			System.out.println(76);
//			PaymentLink payment = razorpay.paymentLink.create(paymentLinkRequest);
//			System.out.println(payment.toString());
//			PaymentLinkResponse res = new PaymentLinkResponse();
//			System.out.println(80);
//			String paymentLinkId = payment.get("id");
//			String paymentLinkUrl = payment.get("short_url");
//			System.out.println(83);
//			res.setPayment_link_id(paymentLinkId);
//			res.setPayment_link_url(paymentLinkUrl);
//			System.out.println(86);
//			if(Integer.parseInt(payment.get("amount_paid").toString())==0) {
//				orderRepository.deleteById(orderId);
//			}
//			
////			RazorpayClient razorpay = new RazorpayClient(apiKey, apiSecret);
////
////			String paymentId = "pay_29QQoUBi66xm2f";
////
////			JSONObject paymentRequest = new JSONObject();
////			paymentRequest.put("amount", 1000);
////			paymentRequest.put("currency", "INR");
//			        
////			Payment payment = razorpay.payments.capture(paymentId, paymentRequest);
//			
//			
//			return new ResponseEntity<PaymentLinkResponse>(res, HttpStatus.CREATED);
//
//		}catch(Exception e) {
//			orderRepository.deleteById(orderId);
//			System.out.println("OrderDeleted from orders table");
//			throw new RazorpayException(e.getMessage());
//			
//		}
//	}
//	
//	@Validated
//	@GetMapping("/payments/{orderId}")
//	public ResponseEntity<ApiResponseDTO>redirect(@RequestParam(name="payment_id") String paymentId, @RequestParam(name= "order_id") Integer orderId) throws OrderException, RazorpayException{
//		
//		Order order = orderService.findOrderById(orderId);
//		
//		RazorpayClient razorpay = new RazorpayClient(apiKey, apiSecret); 
//		
//		try {
//			
//			Payment payment = razorpay.payments.fetch(paymentId);
//			
//			if(payment.get("status").equals("captured")) {
//				order.getPaymentDetails().setPaymentId(paymentId);
//				order.getPaymentDetails().setStatus("COMPLETED");
//				order.setOrderStatus("PLACED");
//				orderService.save(order);			 
//			}
//			
//			ApiResponseDTO apiResponseDTO = new ApiResponseDTO();
//			
//			apiResponseDTO.setMessage("Your order has been placed");
//			apiResponseDTO.setStatus(true);
//			
//			return new ResponseEntity<ApiResponseDTO>(apiResponseDTO, HttpStatus.ACCEPTED);
//			
//		}catch(Exception e) {
//			throw new RazorpayException(e.getMessage());
//		}
//	}
//}




@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:3000", allowCredentials = "true")
public class PaymentController {
	
	   @Value("${razorpay.api.key}")
	    private String apiKey;

	    @Value("${razorpay.api.secret}")
	    private String apiSecret;
	
	private OrderService orderService;
	private UserService userService;
	private OrderRepository orderRepository;
	
	public PaymentController(OrderService orderService,UserService userService,OrderRepository orderRepository) {
		this.orderService=orderService;
		this.userService=userService;
		this.orderRepository=orderRepository;
	}
	
	@PostMapping("/payments/{orderId}")
	public ResponseEntity<PaymentLinkResponse>createPaymentLink(@PathVariable Integer orderId,
			@RequestHeader("Authorization")String jwt) 
					throws RazorpayException, UserException, OrderException{
		
		Order order=orderService.findOrderById(orderId);
		 try {
		      // Instantiate a Razorpay client with your key ID and secret
		      RazorpayClient razorpay = new RazorpayClient(apiKey, apiSecret);

		      // Create a JSON object with the payment link request parameters
		      JSONObject paymentLinkRequest = new JSONObject();
		      paymentLinkRequest.put("amount",Math.ceil(order.getTotalPrice()* 100));
		      paymentLinkRequest.put("currency","INR");    
//		      paymentLinkRequest.put("expire_by",1691097057);
//		      paymentLinkRequest.put("reference_id",order.getId().toString());
		     

		      // Create a JSON object with the customer details
		      JSONObject customer = new JSONObject();
		      customer.put("name",order.getUser().getFirstName()+" "+order.getUser().getLastName());
		      customer.put("contact",order.getUser().getMobileNo());
		      customer.put("email",order.getUser().getEmail());
		      paymentLinkRequest.put("customer",customer);

		      // Create a JSON object with the notification settings
		      JSONObject notify = new JSONObject();
		      notify.put("sms",true);
		      notify.put("email",true);
		      paymentLinkRequest.put("notify",notify);

		      // Set the reminder settings
		      paymentLinkRequest.put("reminder_enable",true);

		      // Set the callback URL and method
		      paymentLinkRequest.put("callback_url","http://localhost:3000/payment-success?order_id="+orderId);
		      paymentLinkRequest.put("callback_method","get");

		      // Create the payment link using the paymentLink.create() method
		      PaymentLink payment = razorpay.paymentLink.create(paymentLinkRequest);
		      
		      String paymentLinkId = payment.get("id");
		      String paymentLinkUrl = payment.get("short_url");
		      
		      PaymentLinkResponse res=new PaymentLinkResponse(paymentLinkUrl,paymentLinkId);
		      
		      PaymentLink fetchedPayment = razorpay.paymentLink.fetch(paymentLinkId);
		      
		      order.setOrderId(fetchedPayment.get("order_id"));
		      orderRepository.save(order);
		      
		   // Print the payment link ID and URL
		      System.out.println("Payment link ID: " + paymentLinkId);
		      System.out.println("Payment link URL: " + paymentLinkUrl);
		      System.out.println("Order Id : "+fetchedPayment.get("order_id")+fetchedPayment);
		      
		      return new ResponseEntity<PaymentLinkResponse>(res,HttpStatus.ACCEPTED);
//		      
		    } catch (RazorpayException e) {
		    	
		      System.out.println("Error creating payment link: " + e.getMessage());
		      throw new RazorpayException(e.getMessage());
		    }
		 
//		 RazorpayClient razorpay = new RazorpayClient("[YOUR_KEY_ID]", "[YOUR_KEY_SECRET]");
//
//		 JSONObject request = new JSONObject();
//		 JSONArray receiverTypeArray = new JSONArray();
//		 receiverTypeArray.put("vpa","bank_account");
//		 request.put("receiver_types", receiverTypeArray);
//		 JSONObject notes = new JSONObject();
//		 notes.put("receiver_key", "receiver_value");
//		 request.put("notes", notes);
//		 request.put("description", "First Customer Identifier");
//
//		 VirtualAccount virtualAccount = razorpayClient.VirtualAccounts.create(request);
		
		
//		order_id
	}
	
  @GetMapping("/payments")
  public ResponseEntity<ApiResponse> redirect(@RequestParam(name="payment_id") String paymentId,@RequestParam("order_id")Integer orderId) throws RazorpayException, OrderException {
	  RazorpayClient razorpay = new RazorpayClient(apiKey, apiSecret);
	  Order order =orderService.findOrderById(orderId);
	
	  try {
		
		
		Payment payment = razorpay.payments.fetch(paymentId);
		System.out.println("payment details --- "+payment+payment.get("status"));
		
		if(payment.get("status").equals("captured")) {
			System.out.println("payment details --- "+payment+payment.get("status"));
		  
			order.getPaymentDetails().setPaymentId(paymentId);
			order.getPaymentDetails().setStatus("COMPLETED");
			order.setOrderStatus("PLACED");
//			order.setOrderItems(order.getOrderItems());
			System.out.println(order.getPaymentDetails().getStatus()+"payment status ");
			orderRepository.save(order);
		}
		ApiResponse res=new ApiResponse("your order get placed", true);
	      return new ResponseEntity<ApiResponse>(res,HttpStatus.OK);
	      
	} catch (Exception e) {
		System.out.println("errrr payment -------- ");
		new RedirectView("https://shopwithzosh.vercel.app/payment/failed");
		throw new RazorpayException(e.getMessage());
	}

  }

}

