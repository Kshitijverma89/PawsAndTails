package com.models;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="product")
public class Product {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="product_id")
	private Integer productId;
	private String category;
	
//	@Column()
	private String productName;
	
	private double price;
	private String breed;
	
	
	
	@OneToOne
	@JoinColumn(name = "id")
	private Description description;
	
	@ManyToMany
	@JoinTable(
			name="seller_product_junction",
			joinColumns = {@JoinColumn(name="product_id")},
			inverseJoinColumns = {@JoinColumn(name="seller_id")} 
			)
	private List<Seller> seller;
	
	@Column(name="image_link")
	private String imageLink;
	
//	@OneTo
//	private Reviews reviews

	public Integer getProductId() {
		return productId;
	}

	public void setProductId(Integer productId) {
		this.productId = productId;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getBreed() {
		return breed;
	}

	public void setBreed(String breed) {
		this.breed = breed;
	}

	public Description getDescription() {
		return description;
	}

	public void setDescription(Description description) {
		this.description = description;
	}

//	public Seller getSeller() {
//		return seller;
//	}
//
//	public void setSeller(Seller seller) {
//		this.seller = seller;
//	}

	public String getImageLink() {
		return imageLink;
	}

	public void setImageLink(String imageLink) {
		this.imageLink = imageLink;
	}

//	public Reviews getReviews() {
//		return reviews;
//	}
//
//	public void setReviews(Reviews reviews) {
//		this.reviews = reviews;
//	}
	
	
	
}
