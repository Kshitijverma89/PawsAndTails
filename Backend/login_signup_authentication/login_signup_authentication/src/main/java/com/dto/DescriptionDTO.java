package com.dto;

import java.util.List;

import com.models.Description;
import com.models.Description.Behaviour;
import com.models.Product;
import com.models.Seller;

public class DescriptionDTO {

	private Status status;
	
	private List<Description> description;
	
	public static enum Status{
		OK, FAILED, NOTFOUND
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	public List<Description> getDescription() {
		return description;
	}

	public void setDescription(List<Description> description) {
		this.description = description;
	}



}
