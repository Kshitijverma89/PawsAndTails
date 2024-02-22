package com.models;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="seller")
public class Seller {
	
	@Id
	@Column(name="seller_id")
	private Integer sellerId;
	
	private String name;
	
	@OneToMany
	@Column(name="product_list")
	private List<Product> productList;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "address")
	private Address address;
	
	private String email;
	
	@Column(name="contact_number")
	private Integer contactNumber;
}
