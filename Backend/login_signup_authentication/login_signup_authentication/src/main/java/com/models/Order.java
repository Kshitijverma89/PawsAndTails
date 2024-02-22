package com.models;


import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Pattern;

@Entity
@Table(name="orders")
public class Order {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	

	@Column(name="order_id")
	private Integer orderId;
	
	@ManyToOne
	@JoinColumn(name = "application_user")
	private ApplicationUser user;
	
	@Column(name="order_date")
	private LocalDate orderDate;
	
	@OneToMany(mappedBy = "order", cascade= CascadeType.ALL)
	private List<OrderItem>orderItem = new ArrayList<OrderItem>();
	
	@Column(name="delivery_date")
	private LocalDate deliveryDate;
	
//	@Column(name="total_amount")
//	private double totalAmount;
	
	@OneToOne
	@JoinColumn(name = "shipping_address")
	private Address shippingAddress;
	
	@Column(name="payment_method")
	private PaymentMethod paymentMethod;
	
	@Embedded
	private PaymentDetails paymentDetails = new PaymentDetails();
	
	@Column(name="total_price")
	private double totalPrice;
	
	@Column(name="total_discounted_price")
	private double totalDiscountPrice;
	
	private double discount;
	
	@Column(name="total_item")
	private int totalItem;
	
	@Column(name="created_at")
	private LocalDateTime createdAt;
	
	@Pattern(regexp = "^(PLACED|PENDING)$", message = "Role must be 'COMPLETED', 'PENDING'")
	private String orderStatus;
	
	public static enum PaymentMethod{
		CARD, CASHONDELIVERY, UPI;
	}
	
	public Order() {
		super();

	}
	
	

	public Integer getOrderId() {
		return orderId;
	}

	public Order(Integer id, Integer orderId, ApplicationUser user, LocalDate orderDate, List<OrderItem> orderItem,
			LocalDate deliveryDate, double totalAmount, Address shippingAddress, PaymentMethod paymentMethod,
			PaymentDetails paymentDetails, double totalPrice, double totalDiscountPrice, double discount, int totalItem,
			LocalDateTime createdAt,
			@Pattern(regexp = "^(PLACED|PENDING)$", message = "Role must be 'COMPLETED', 'PENDING'") String orderStatus) {
		super();
		this.id = id;
		this.orderId = orderId;
		this.user = user;
		this.orderDate = orderDate;
		this.orderItem = orderItem;
		this.deliveryDate = deliveryDate;
//		this.totalAmount = totalAmount;
		this.shippingAddress = shippingAddress;
		this.paymentMethod = paymentMethod;
		this.paymentDetails = paymentDetails;
		this.totalPrice = totalPrice;
		this.totalDiscountPrice = totalDiscountPrice;
		this.discount = discount;
		this.totalItem = totalItem;
		this.createdAt = createdAt;
		this.orderStatus = orderStatus;
	}



	public void setOrderId(Integer orderId) {
		this.orderId = orderId;
	}
	
	public LocalDate getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(LocalDate orderDate) {
		this.orderDate = orderDate;
	}

//	public double getTotalAmount() {
//		return totalAmount;
//	}
//
//	public void setTotalAmount(double totalAmount) {
//		this.totalAmount = totalAmount;
//	}

	public Address getShippingAddress() {
		return shippingAddress;
	}

	public void setShippingAddress(Address shippingAddress) {
		this.shippingAddress = shippingAddress;
	}

	public PaymentMethod getPaymentMethod() {
		return paymentMethod;
	}

	public ApplicationUser getUser() {
		return user;
	}

	public void setUser(ApplicationUser user2) {
		this.user = user2;
	}

	public void setPaymentMethod(PaymentMethod paymentMethod) {
		this.paymentMethod = paymentMethod;
	}

	public PaymentDetails getPaymentDetails() {
		return paymentDetails;
	}

	public void setPaymentDetails(PaymentDetails paymentDetails) {
		this.paymentDetails = paymentDetails;
	}

	public String getOrderStatus() {
		return orderStatus;
	}

	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public List<OrderItem> getOrderItem() {
		return orderItem;
	}

	public void setOrderItem(List<OrderItem> orderItem) {
		this.orderItem = orderItem;
	}

	public LocalDate getDeliveryDate() {
		return deliveryDate;
	}

	public void setDeliveryDate(LocalDate deliveryDate) {
		this.deliveryDate = deliveryDate;
	}

	public double getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}

	public double getTotalDiscountPrice() {
		return totalDiscountPrice;
	}

	public void setTotalDiscountPrice(double totalDiscountPrice) {
		this.totalDiscountPrice = totalDiscountPrice;
	}

	public double getDiscount() {
		return discount;
	}

	public void setDiscount(double discount) {
		this.discount = discount;
	}

	public int getTotalItem() {
		return totalItem;
	}

	public void setTotalItem(int totalItem) {
		this.totalItem = totalItem;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
	
	



	@Override
	public String toString() {
		return "Order [id=" + id + ", orderId=" + orderId + ", user=" + user + ", orderDate=" + orderDate
				+ ", orderItem=" + orderItem + ", deliveryDate=" + deliveryDate + ", shippingAddress=" + shippingAddress
				+ ", paymentMethod=" + paymentMethod + ", paymentDetails=" + paymentDetails + ", totalPrice="
				+ totalPrice + ", totalDiscountPrice=" + totalDiscountPrice + ", discount=" + discount + ", totalItem="
				+ totalItem + ", createdAt=" + createdAt + ", orderStatus=" + orderStatus + "]";
	}
	
	
	
}
