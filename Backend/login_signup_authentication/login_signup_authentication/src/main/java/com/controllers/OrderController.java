package com.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exception.InvalidAddressException;
import com.exception.OrderException;
import com.models.Address;
import com.models.ApplicationUser;
import com.models.Order;
import com.services.OrderService;
import com.services.UserService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:3000", allowCredentials = "true")
public class OrderController {

	@Autowired
	private OrderService orderService;
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/order")
	public ResponseEntity<Order> createOrder(@RequestBody Address address, HttpServletRequest request) throws UserException, InvalidAddressException {
		
		ApplicationUser user= userService.findUserByJwt(request);
		
		Order order = orderService.createOrder(user, address);
		
		return new ResponseEntity<Order>(order, HttpStatus.OK);

	 }
	
	@GetMapping("/order/{id}")
	public ResponseEntity<Order> createOrder(@PathVariable Integer id, HttpServletRequest request) throws UserException, OrderException {
		System.out.println(id);
		
		ApplicationUser user= userService.findUserByJwt(request);
		
		Order order = orderService.findOrderById(id);
		
		return new ResponseEntity<Order>(order, HttpStatus.CREATED);

	 }
	
	@GetMapping("/order/user")
	public ResponseEntity<List<Order>> getOrdersByJwt(HttpServletRequest request) throws UserException, OrderException {
		
		
		ApplicationUser user= userService.findUserByJwt(request);
		System.out.println(user);
		
		List<Order> order = orderService.findOrdersByUser(user);
		System.out.println(order);
		
		return new ResponseEntity<List<Order>>(order, HttpStatus.CREATED);

	 }
	 
}
