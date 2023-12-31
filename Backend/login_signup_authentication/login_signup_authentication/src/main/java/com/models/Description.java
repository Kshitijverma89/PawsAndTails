package com.models;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;

@Entity
@Table(name= "description")
public class Description {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private Integer Id;
	
	private String Breed;
	private Integer Age;
	
	@Column(name="life_expectancy")
	private Integer lifeExpectancy;
	
	private double size;
	private String origination;
	private String color;
	private Behaviour behaviour;
	
	public static enum Behaviour{
		AGGRESIVE, CALM;
	}
	
	

	public Integer getId() {
		return Id;
	}



	public void setId(Integer id) {
		Id = id;
	}



	public String getBreed() {
		return Breed;
	}



	public void setBreed(String breed) {
		Breed = breed;
	}



	public Integer getAge() {
		return Age;
	}



	public void setAge(Integer age) {
		Age = age;
	}



	public Integer getLifeExpectancy() {
		return lifeExpectancy;
	}



	public void setLifeExpectancy(Integer lifeExpectancy) {
		this.lifeExpectancy = lifeExpectancy;
	}



	public double getSize() {
		return size;
	}



	public void setSize(double size) {
		this.size = size;
	}



	public String getOrigination() {
		return origination;
	}



	public void setOrigination(String origination) {
		this.origination = origination;
	}



	public String getColor() {
		return color;
	}



	public void setColor(String color) {
		this.color = color;
	}



	public Behaviour getBehaviour() {
		return behaviour;
	}



	public void setBehaviour(Behaviour behaviour) {
		this.behaviour = behaviour;
	}



	@Override
	public String toString() {
		return "Description [Id=" + Id + ", Breed=" + Breed + ", Age=" + Age + ", lifeExpectancy=" + lifeExpectancy
				+ ", size=" + size + ", origination=" + origination + ", color=" + color + ", behaviour=" + behaviour
				+ ", product="  + "]";
	}
	
	
	
	
	

}
