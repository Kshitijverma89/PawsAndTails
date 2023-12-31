package com.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="cart")
public class Cart {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="cart_item_id")
	private Integer cardItemId;
	
	@OneToOne
	private Product product;
	
	private Integer quantity;
	
	@Column(name="total_amount")
	private double totalAmount;
	
	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public double getTotal_amount() {
		return totalAmount;
	}

	public void setTotal_amount(double total_amount) {
		this.totalAmount = total_amount;
	}
	
}
