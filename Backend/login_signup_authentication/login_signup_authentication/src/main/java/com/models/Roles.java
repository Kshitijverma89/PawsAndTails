package com.models;

import org.springframework.security.core.GrantedAuthority;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="roles")
public class Roles implements GrantedAuthority{
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="role_id")
	private Integer rolesId;
	
	private String authority;		//role
	
	public Roles() {
		super();
	}
	
	public Roles(String authority) {
		this.authority=authority;
	}

	public Roles(Integer rolesId, String authority) {
		super();
		this.rolesId = rolesId;
		this.authority = authority;
	}

	@Override
	public String getAuthority() {
		
		return this.authority;
	}

	public Integer getRolesId() {
		return rolesId;
	}

	public void setRolesId(Integer rolesId) {
		this.rolesId = rolesId;
	}

	public void setAuthority(String authority) {
		this.authority = authority;
	}
	
}
