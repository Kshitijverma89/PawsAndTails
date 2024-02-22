package com.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.dto.CartGetResponseDTO;
import com.dto.CartPutResponseDTO;
import com.dto.CartRequestDTO;
import com.models.ApplicationUser;
import com.models.Cart;
import com.models.Product;
import com.repository.ProductRepository;
import com.services.CartService;
import com.services.ProductService;
import com.services.UserService;

import jakarta.annotation.PostConstruct;
import jakarta.servlet.http.HttpServletRequest;


@RestController
@RequestMapping("/cart")
@CrossOrigin(origins="http://localhost:3000", allowCredentials = "true")
public class CartController {
	@Autowired
	private CartService cartService;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private ProductService productService;
	
	@Autowired
	private UserService userService;
	
	
	@PostMapping("/{username}")
	public Cart saveToCart(@RequestBody CartRequestDTO cartDTO, @PathVariable String username, HttpServletRequest request ) {
//		Cart cart = modelMapper.map(cartDTO, Cart.class);
		Cart cart = new Cart();
		ApplicationUser user= userService.findUserByJwt(request);
		System.out.println("59"+" "+request);
		cart.setUser(user);
		Product product = productService.findById(cartDTO.getProduct());
		cart.setProduct(product);
		cart.setQuantity(cartDTO.getQuantity());
		cart.setTotalAmount(cartDTO.getQuantity()*product.getPrice());
		cart.setUsername(username);
		Cart cartItem= cartService.save(cart);
		return cartItem;
	}
	
	@GetMapping("/cartItems/{username}")
	public CartGetResponseDTO getAllCartItemsByUsername(@PathVariable String username){
		List<Cart> cartItemsList = cartService.getAllCartItemsByUsername(username);
		CartGetResponseDTO cartGetResponseDTO = new CartGetResponseDTO();
		cartGetResponseDTO.setCart(cartItemsList);
		return cartGetResponseDTO;

	}
	
	@PutMapping("/cartItems/{id}/{qty}")
	public  CartPutResponseDTO updateCartItemById(@PathVariable Integer id, @PathVariable Integer qty){
		System.out.println(qty);
		Cart cart = cartService.getById(id);
		cart.setQuantity(qty);
		Product product = cart.getProduct();
		cart.setTotalAmount(cart.getQuantity()*product.getPrice());
//		System.out.println(item.getQuantity());
		cart = cartService.save(cart);
		CartPutResponseDTO cartPutResponseDTO = new CartPutResponseDTO();
		cartPutResponseDTO.setCart(cart);
		return cartPutResponseDTO;
			
	}
	
//	@DeleteMapping("/cartItems/{id}")
	@RequestMapping(value = "/cartItems/{id}", method = RequestMethod.DELETE)
	@ResponseBody
	public String updateCartItemById(@PathVariable Integer id){
		
		String response = cartService.deleteItemById(id);
		
		return response;
	}
	
    @PostConstruct
    public void configureModelMapper() {
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        // Add custom mappings if needed
    }
}

