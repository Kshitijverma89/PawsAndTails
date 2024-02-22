package com.models;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

public class PaymentInformation {
	
	@Column(name="cardholder_name")
	private String cardholderName;
	
	@Column(name="card_name")
	private String cardNumber;
	
	@Column(name="expiration_date")
	private LocalDate expirationDate;
	
	private String cvv;

}
