package com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.exception.OrderException;
import com.models.ApplicationUser;
import com.models.Order;
import com.models.OrderItem;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {

	@Query("select c from Order c where c.orderId = ?1")
	public Order findOrderById(Long orderId)throws OrderException;

	@Query("select c from Order c where c.user = :user")
	public List<Order> findByUsername(ApplicationUser user);

//	public OrderItem save(OrderItem orderItem);

}
