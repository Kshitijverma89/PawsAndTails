package com.dto;

public class PaymentLinkResponseMine {

	private String payment_link_url;
	
	private String payment_link_id;

	public PaymentLinkResponseMine() {
		super();
	}

	public PaymentLinkResponseMine(String paymentLinkUrl, String paymentLinkId) {
		super();
		this.payment_link_url = paymentLinkUrl;
		this.payment_link_id = paymentLinkId;
	}

	public String getPaymentLinkUrl() {
		return payment_link_url;
	}

	public void setPaymentLinkUrl(String payment_link_url) {
		this.payment_link_url = payment_link_url;
	}

	public String getPaymentLinkId() {
		return payment_link_id;
	}

	public void setPaymentLinkId(String paymentLinkId) {
		this.payment_link_id = paymentLinkId;
	}
	
	
	
}
