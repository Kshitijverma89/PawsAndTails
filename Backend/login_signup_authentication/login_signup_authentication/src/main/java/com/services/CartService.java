package com.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.models.Cart;
import com.repository.CartRepository;

@Service
public class CartService {
	
	@Autowired
	private CartRepository cartRepository;

	public Cart save(Cart cart) {
		// TODO Auto-generated method stub
		
		Cart cartItem = cartRepository.save(cart);
		
		return cartItem;
		
	}

	public List<Cart> getAllCartItemsByUsername(String username) {
		// TODO Auto-generated method stub
		
		List<Cart> cartItemsList = cartRepository.getAllCartItemsByUsername(username);
		
		return cartItemsList;
	}

	public Cart getById(Integer id) {
		// TODO Auto-generated method stub
		
		Cart cart = cartRepository.getById(id);
		
		return cart;
	}

	public String deleteItemById(Integer id) {
		// TODO Auto-generated method stub
		
		cartRepository.deleteById(id);
		
		String str = "Delete Successful";
		return str;
	}

	public List<Cart> findUserCart(String username) {
		// TODO Auto-generated method stub
		List<Cart> cart = cartRepository.findByUsername(username);
		return cart;
	}

}
