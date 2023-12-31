package com.models;

import java.time.Instant;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="orders")
public class Orders {
	
	@Id
	@Column(name="order_id")
	private Integer orderId;
	
	@Column(name="order_date")
	private Instant instant;
	
	@OneToOne
	private Cart cart;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Address shippingAddress;
	
	@Column(name="payment_method")
	private PaymentMethod paymentMethod;
	
	public static enum PaymentMethod{
		CARD, CASHONDELIVERY, UPI;
	}
	
	public Orders() {
		super();
		setInstant();
	}

	public Integer getOrderId() {
		return orderId;
	}

	public void setOrderId(Integer orderId) {
		this.orderId = orderId;
	}

	public Instant getInstant() {
		return instant;
	}

	public void setInstant() {
		this.instant = Instant.now();
	}

	public Cart getCart() {
		return cart;
	}

	public void setCart(Cart cart) {
		this.cart = cart;
	}

	public Address getShippingAddress() {
		return shippingAddress;
	}

	public void setShippingAddress(Address shippingAddress) {
		this.shippingAddress = shippingAddress;
	}

	public PaymentMethod getPaymentMethod() {
		return paymentMethod;
	}

	public void setPaymentMethod(PaymentMethod paymentMethod) {
		this.paymentMethod = paymentMethod;
	}
	
}
