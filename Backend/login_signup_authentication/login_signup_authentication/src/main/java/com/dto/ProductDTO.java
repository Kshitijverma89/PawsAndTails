package com.dto;

import java.util.List;

import com.models.Description;
import com.models.Product;
import com.models.Seller;

public class ProductDTO {

	private Status status;
	
	private List<Product> product;
	
	private int count;
	
	public static enum Status{
		OK, FAILED, NOTFOUND
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	public List<Product> getProduct() {
		return product;
	}

	public void setProduct(List<Product> product) {
		this.product = product;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}
	
	
}
