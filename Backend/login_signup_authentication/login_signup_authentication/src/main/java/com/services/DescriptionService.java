package com.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.models.Description;
import com.models.Product;
import com.repository.DescriptionRepository;
import com.repository.ProductRepository;

@Service
public class DescriptionService {
	
	@Autowired
	private DescriptionRepository descriptionRepository;
	
	public List<Description> getAllDescription(){
		List<Description> descList = descriptionRepository.findAll();
		return descList;
	}
	
	public Description getDescriptionById(int id){
		Description descList = descriptionRepository.findByDescriptionId(id);
		return descList;
	}
}
