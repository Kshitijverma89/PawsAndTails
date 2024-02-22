package com.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationProvider;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.models.ApplicationUser;
import com.repository.UserRepository;
import com.services.UserService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/")
	public String helloUserController() {
		return "User access level";
	}
	
	@GetMapping("/user")
	public ApplicationUser findUserById(HttpServletRequest request) throws UserException {
		
		ApplicationUser user = userService.findUserByJwt(request);
		
		return user;
	}
	
	@GetMapping("/current")
    public ApplicationUser getCurrentUser() {
        return userService.getCurrentUser();
    }
	
	 @PutMapping("/current")
	    public void updateUser(@RequestBody ApplicationUser updatedUser) {
	        userService.updateUser(updatedUser);
	    }
}

