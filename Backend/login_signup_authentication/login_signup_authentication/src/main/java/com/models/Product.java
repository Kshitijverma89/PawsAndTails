package com.models;

import java.util.ArrayList;
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
import jakarta.persistence.OneToMany;
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
	
	@Column(name="discount_percent")
	private float discountPercent=0.0f;
	
	private int stock=0;
	
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
	
	@Column(name="image_link", nullable = true)
	private String imageLink;
	
	@Column(nullable = true)
	@OneToMany(mappedBy = "product", cascade=CascadeType.ALL, orphanRemoval= true)
	private List<Rating> rating = new ArrayList<Rating>();
	
	@Column(nullable = true)
	@OneToMany(mappedBy = "product", cascade=CascadeType.ALL, orphanRemoval= true)
	private List<Review> review = new ArrayList<Review>();
	
	@Column(name="num_ratings")
	private int numRatings=0;
	
//	@OneTo
//	private Reviews reviews
	
	

	public Integer getProductId() {
		return productId;
	}

	public Product() {
	super();
	}

	public Product(Integer productId, String category, String productName, double price, float discountPercent,
			int stock, String breed, Description description, List<Seller> seller, String imageLink,
			List<Rating> rating, List<Review> review, int numRatings) {
		super();
		this.productId = productId;
		this.category = category;
		this.productName = productName;
		this.price = price;
		this.discountPercent = discountPercent;
		this.stock = stock;
		this.breed = breed;
		this.description = description;
		this.seller = seller;
		this.imageLink = imageLink;
		this.rating = rating;
		this.review = review;
		this.numRatings = numRatings;
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

	public float getDiscountPercent() {
		return discountPercent;
	}

	public void setDiscountPercent(float discountPercent) {
		this.discountPercent = discountPercent;
	}

	public int getStock() {
		return stock;
	}

	public void setStock(int stock) {
		this.stock = stock;
	}

	public List<Seller> getSeller() {
		return seller;
	}

	public void setSeller(List<Seller> seller) {
		this.seller = seller;
	}

	public List<Rating> getRating() {
		return rating;
	}

	public void setRating(List<Rating> rating) {
		this.rating = rating;
	}

	public List<Review> getReview() {
		return review;
	}

	public void setReview(List<Review> review) {
		this.review = review;
	}

	public int getNumRatings() {
		return numRatings;
	}

	public void setNumRatings(int numRatings) {
		this.numRatings = numRatings;
	}
	
	

//	public Reviews getReviews() {
//		return reviews;
//	}
//
//	public void setReviews(Reviews reviews) {
//		this.reviews = reviews;
//	}
	
	
	
}
