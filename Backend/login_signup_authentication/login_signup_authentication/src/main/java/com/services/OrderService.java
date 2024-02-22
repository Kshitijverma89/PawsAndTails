package com.services;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exception.InvalidAddressException;
import com.exception.OrderException;
import com.models.Address;
import com.models.ApplicationUser;
import com.models.Cart;
import com.models.Order;
import com.models.OrderItem;
import com.repository.CartRepository;
import com.repository.OrderItemRepository;
import com.repository.OrderRepository;
import com.repository.UserRepository;
import com.service.interf.OrderServiceInterface;

import jakarta.transaction.Transactional;

@Service
public class OrderService implements OrderServiceInterface {

	@Autowired
	private OrderRepository orderRepository;

	@Autowired
	private OrderItemRepository orderItemRepository;

	@Autowired
	private CartRepository cartRepository;

	@Autowired
	private CartService cartService;

	@Autowired
	private ProductService productService;

	@Autowired
	private AddressRepository addressRepository;

	@Autowired
	private UserRepository userRepository;

	@Override
	@Transactional
	public Order createOrder(ApplicationUser user, Address shippingAddress) throws InvalidAddressException {
		// TODO Auto-generated method stub
		System.out.println(55);
		Address addr= null;
		System.out.println(user);
		try {
		System.out.println(shippingAddress);
		if(shippingAddress.getAddrId()!= null)
		addr = addressRepository.getById(shippingAddress.getAddrId());
		System.out.println(addr);
		System.out.println(user);
		
	
			
//		List<Address> addressList = addressRepository.getByUsername(user.getUsername());
//		System.out.println(addressList.get(0));
//		for(Address addr : addressList) {
//			if(addr.getStreet() == shippingAddress.getStreet()&&addr.getCity()==shippingAddress.getCity()&&addr.getStreet()==shippingAddress.getStreet()) {
//				throw new InvalidAddressException();
//			}
//		}
		if(addr==null) {
			System.out.println(75);
		shippingAddress.setUser(user);
		System.out.println(77);
		Address address = addressRepository.save(shippingAddress);
		System.out.println(79);
		user.getAddress().add(address);
		System.out.println(81);
		userRepository.save(user);
		}
		
		List<Cart> cart = cartService.findUserCart(user.getUsername());
		System.out.println(cart.get(0));
		List<OrderItem> orderItems = new ArrayList<>();
		
		for(Cart item: cart) {
			OrderItem orderItem = new OrderItem();
			System.out.println(81);
			orderItem.setPrice(item.getProduct().getPrice());
			orderItem.setProduct(item.getProduct());
			orderItem.setDiscountedPrice(item.getProduct().getPrice()*0.95);
			orderItem.setQuantity(item.getQuantity());
			orderItem.setUserId(user.getUserId());
			orderItem.setDeliveryDate(LocalDateTime.now().plusDays(7));
			
			OrderItem createdOrderItem = orderItemRepository.save(orderItem);
			System.out.println(81);
			orderItems.add(createdOrderItem);
		}
			Order createdOrder = new Order();
			createdOrder.setUser(user);
			createdOrder.setOrderItem(orderItems);
			double totalPrice = cartRepository.getTotalPrice(user.getUsername());
			createdOrder.setTotalPrice(totalPrice);
			createdOrder.setDiscount(totalPrice *0.05);
			createdOrder.setTotalDiscountPrice(totalPrice*0.95);
			int totalItem = cartRepository.getQuantityByUsername(user.getUsername());
			createdOrder.setTotalItem(totalItem);
			createdOrder.setDeliveryDate(LocalDate.now().plusDays(7));
			if(addr==null) {
				System.out.println(104);
			createdOrder.setShippingAddress(shippingAddress);
			System.out.println(106);
			}
			else {
				System.out.println(108);
				createdOrder.setShippingAddress(addr);
				System.out.println(110);
			}
			createdOrder.setOrderDate(LocalDate.now());
			createdOrder.setOrderStatus("PENDING");
			createdOrder.getPaymentDetails().setStatus("PENDING");
			createdOrder.setCreatedAt(LocalDateTime.now());
			System.out.println(116);
			Order savedOrder = orderRepository.save(createdOrder);
			System.out.println(118);
			for(OrderItem item: orderItems) {
				System.out.println(120);
				item.setOrder(savedOrder);
				System.out.println(122);
				orderItemRepository.save(item);
			}
		
		return savedOrder;
		
	}catch (Exception error) {
		throw new InvalidAddressException(error.getMessage());
	}
	}

	@Override
	public Order findOrderById(Integer orderId) throws OrderException {
		// TODO Auto-generated method stub
		Optional<Order> order = orderRepository.findById(orderId);
		return order.get();
	}

	@Override
	public List<Order> userOrderHistory(Integer orderId) throws OrderException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Order placedOrder(Integer orderId) throws OrderException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Order confirmedOrder(Integer orderId) throws OrderException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Order shippedOrder(Integer orderId) throws OrderException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Order deliveredOrder(Integer orderId) throws OrderException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Order cancelledOrder(Integer orderId) throws OrderException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Order> getAllOrders() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteOrderById(Long orderId) throws OrderException {
		// TODO Auto-generated method stub

	}

	public void save(Order order) {
		// TODO Auto-generated method stub

	}

	public List<Order> findOrdersByUser(ApplicationUser user) {
		// TODO Auto-generated method stub
		List<Order> orderList = orderRepository.findByUsername(user);

		return orderList;
	}

}
