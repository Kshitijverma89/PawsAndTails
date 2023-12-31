package com.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.models.Description;
import com.models.Product;
import com.models.Roles;

public interface DescriptionRepository extends JpaRepository<Description, Integer>{
	
	@Query("select d from Description d where d.id = ?1 ")
	public Description findByDescriptionId(int pid);
	
}
