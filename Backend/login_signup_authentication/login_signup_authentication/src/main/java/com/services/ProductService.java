package com.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.models.Product;
import com.repository.DescriptionRepository;
import com.repository.ProductRepository;

import jakarta.transaction.Transactional;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private DescriptionRepository descriptionRepository;
	
	public List<Product> getAllProducts(){
		List<Product> productList = productRepository.findAll();
		return productList;
	}
	
	public Product findById(Integer id) {
		Product product = productRepository.findProductByProductId(id);
		return product;
	}
	
	public List<Product> getAllDogs(String category){
		List<Product> productList = productRepository.findAllDogs(category);
		return productList;
	}
	public List<Product> getAllCats(String category){
		List<Product> productList = productRepository.findAllDogs(category);
		return productList;
	}
	public List<Product> getAllBirds(String category){
		List<Product> productList = productRepository.findAllDogs(category);
		return productList;
	}
	public List<Product> getAllFishes(String category){
		List<Product> productList = productRepository.findAllDogs(category);
		return productList;
	}
	
	 @Transactional
	    public void deleteProductById(Integer productId) {
	        productRepository.deleteByProductId(productId);
	    }
	 
	 public List<Product> getAllProductByName(String productName){
			List<Product> productList = productRepository.findAllProductByName(productName);
			return productList;
		}
	 
	 public void addNewProduct(Product product) {
		 System.out.println(product);
		 descriptionRepository.save(product.getDescription());
	     productRepository.save(product);
	    }

}
