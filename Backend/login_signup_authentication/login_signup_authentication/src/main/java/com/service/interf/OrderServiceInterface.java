package com.service.interf;

import java.util.List;
import java.util.Optional;

import com.exception.InvalidAddressException;
import com.exception.OrderException;
import com.models.Address;
import com.models.ApplicationUser;
import com.models.Order;

public interface OrderServiceInterface {
	
	public Order createOrder(ApplicationUser user, Address shippingAddress) throws InvalidAddressException;
	
	public Order findOrderById(Integer orderId) throws OrderException;
	
	public List<Order> userOrderHistory(Integer orderId) throws OrderException;
	
	public Order placedOrder(Integer orderId) throws OrderException;
	
	public Order confirmedOrder (Integer orderId) throws OrderException;
	
	public Order shippedOrder(Integer orderId) throws OrderException;
	
	public Order deliveredOrder(Integer orderId) throws OrderException;
	
	public Order cancelledOrder(Integer orderId) throws OrderException;
	
	public List<Order>getAllOrders();
	
	public void deleteOrderById(Long orderId) throws OrderException;


}
