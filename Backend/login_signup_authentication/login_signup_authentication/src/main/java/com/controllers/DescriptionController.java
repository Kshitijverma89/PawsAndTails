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
public class DescriptionController {

	
	@Autowired
	private DescriptionService descriptionService;
	

	@GetMapping("/dogs/description")
	public DescriptionDTO fetchDescription() {
		List<Description> desc= descriptionService.getAllDescription();
		DescriptionDTO descDto = new DescriptionDTO();
		
		descDto.setDescription(desc);
		descDto.setStatus(DescriptionDTO.Status.OK);
		
		
		return descDto;
	}
}
