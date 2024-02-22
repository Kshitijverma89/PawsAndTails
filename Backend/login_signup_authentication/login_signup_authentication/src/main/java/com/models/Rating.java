package com.models;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Rating {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	@ManyToOne
	@JoinColumn(name="user_id", nullable= false)
	private ApplicationUser user;

	@JsonIgnore 
	@ManyToOne
	@JoinColumn(name="product_id", nullable= false)
	private Product product;
	
	
	private double rating;
	
	@Column(name="creation_date")
	private LocalDateTime createdAt;
}
