package com.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;

import com.models.Product;
import com.models.Roles;

public interface ProductRepository extends JpaRepository<Product, Integer>{
}
