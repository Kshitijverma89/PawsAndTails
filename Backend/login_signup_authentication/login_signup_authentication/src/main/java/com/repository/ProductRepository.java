package com.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.models.Product;
import com.models.Roles;

public interface ProductRepository extends JpaRepository<Product, Integer>{
	
	public Product findProductByProductId(Integer id);
	
	@Query("select c from Product c where c.category=?1")
	public List<Product> findAllDogs(String dogs);
	
	@Query("select c from Product c where c.category=?1")
	public List<Product> findAllCats(String cats);
	
	@Query("select c from Product c where c.category=?1")
	public List<Product> findAllBirds(String birds);
	
	@Query("select c from Product c where c.category=?1")
	public List<Product> findAllFishes(String fishes);
	
	@Query("DELETE FROM Product p WHERE p.productId = :productId")
	 @Modifying
	 public void deleteByProductId(Integer productId);
	
	 @Query("select c from Product c where c.productName=?1")
		public List<Product> findAllProductByName(String productName);
	
}
