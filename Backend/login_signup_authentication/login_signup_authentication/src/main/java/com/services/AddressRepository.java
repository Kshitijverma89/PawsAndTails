package com.services;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.models.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address, Integer> {

	public Address save(Address shippingAddress);

	@Query("SELECT a FROM Address a JOIN ApplicationUser u ON u.userId = a.user.userId WHERE u.username = :username")
	public List<Address> getByUsername(String username);		

}
