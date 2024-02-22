package com.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.dto.DescriptionDTO;
import com.dto.ProductDTO;
import com.dto.ProductDTO.Status;
import com.models.Description;
import com.models.Product;
import com.services.DescriptionService;
import com.services.ProductService;

@RestController
@RequestMapping("/product")
@CrossOrigin(origins="http://localhost:3000", methods = RequestMethod.GET, allowCredentials = "true")
public class ProductController {

	@Autowired
	private ProductService productService;
	
	
	@GetMapping("/dogs")
	public ProductDTO fetchDogs() {
		List<Product> product= productService.getAllDogs("Dog");
		ProductDTO productDto = new ProductDTO();
		
		productDto.setStatus(Status.OK);
		productDto.setProduct(product);
		productDto.setCount(product.size());
		
		
		return productDto;
	}
	@GetMapping("/cats")
	public ProductDTO fetchBirds() {
		List<Product> product= productService.getAllCats("Cat");
		ProductDTO productDto = new ProductDTO();
		
		productDto.setStatus(Status.OK);
		productDto.setProduct(product);
		productDto.setCount(product.size());
		
		
		return productDto;
	}
	@GetMapping("/birds")
	public ProductDTO fetchCats() {
		List<Product> product= productService.getAllBirds("Bird");
		ProductDTO productDto = new ProductDTO();
		
		productDto.setStatus(Status.OK);
		productDto.setProduct(product);
		productDto.setCount(product.size());
		
		
		return productDto;
	}
	@GetMapping("/fishes")
	public ProductDTO fetchFishes() {
		List<Product> product= productService.getAllFishes("Fish");
		ProductDTO productDto = new ProductDTO();
		
		productDto.setStatus(Status.OK);
		productDto.setProduct(product);
		productDto.setCount(product.size());
		
		
		return productDto;
	}
	
	@GetMapping("/all")
	public ProductDTO fetchProducts() {
		List<Product> product= productService.getAllProducts();
		ProductDTO productDto = new ProductDTO();
		
		productDto.setStatus(Status.OK);
		productDto.setProduct(product);
		productDto.setCount(product.size());
		
		
		return productDto;
	}
	
	 @DeleteMapping("/{productId}")
	    public void deleteProductById(@PathVariable Integer productId) {
	        productService.deleteProductById(productId);
	    }
	 
	 @GetMapping("/{productName}")
		public ProductDTO fetchProductByName(@PathVariable String productName) {
			List<Product> product= productService.getAllProductByName(productName);
			ProductDTO productDto = new ProductDTO();
			
			productDto.setStatus(Status.OK);
			productDto.setProduct(product);
			productDto.setCount(product.size());
			
			
			return productDto;
		}
	 
	 @PostMapping("/add")
	    public String addProduct(@RequestBody Product product) {
	        productService.addNewProduct(product);
	        return "Product added successfully";
	    }
}