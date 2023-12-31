package com.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
	public ProductDTO fetchProducts() {
		List<Product> product= productService.getAllProducts();
		ProductDTO productDto = new ProductDTO();
		
		productDto.setStatus(Status.OK);
		productDto.setProduct(product);
		productDto.setCount(product.size());
		
		

//		List<Product> product = new ArrayList<Product>();
//		productDto.setStatus(Status.OK);
//		productDto.setProduct(product);
		
		return productDto;
	}
}
