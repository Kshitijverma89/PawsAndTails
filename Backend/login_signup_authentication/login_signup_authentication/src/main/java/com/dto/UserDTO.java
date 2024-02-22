package com.dto;

import java.util.List;

import com.models.ApplicationUser;
import com.models.Description;
import com.models.Product;
import com.models.Seller;

public class UserDTO {

	private Status status;
	
	private List<ApplicationUser> user;
	
	

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

	public List<ApplicationUser> getUser() {
		return user;
	}

	public void setUser(List<ApplicationUser> user) {
		this.user = user;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}
	
	
}
