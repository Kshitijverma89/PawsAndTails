package com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.models.Cart;

@Repository 
public interface CartRepository extends JpaRepository<Cart, Integer> {
	
	@Query("select c from Cart c where c.username = ?1")
	public List<Cart> getAllCartItemsByUsername(String username);

	public List<Cart> findByUsername(String username);

	@Query("SELECT SUM(p.price) FROM Cart c JOIN Product p ON p.productId = c.product.productId WHERE c.username = :username")
	public double getTotalPrice(String username);

	@Query("SELECT SUM(c.quantity) FROM Cart c WHERE c.username = :username")
	public int getQuantityByUsername(String username);
	
}
