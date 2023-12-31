package com.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.dto.LoginResponseDTO;
import com.dto.RegistrationDTO;
import com.models.ApplicationUser;
import com.services.AuthenticationService;

@CrossOrigin(origins="http://localhost:3000", methods = RequestMethod.POST, allowCredentials = "true")
//@CrossOrigin(origins ="http://localhost:3000", methods = RequestMethod.POST, allowCredentials = "true")
@RestController	//allow us to map end points to our servlets in the backend 
@RequestMapping("/auth")	//Map this controller to a specific end point
public class AuthenticationController {
	
	@Autowired
	private AuthenticationService authenticationService;
	
	@PostMapping("/register")
	public ApplicationUser registerUser(@RequestBody RegistrationDTO body) {
		return authenticationService.registerUser(body.getFirstName(), body.getLastName(), body.getEmail(), body.getMobNo(), body.getUsername(), body.getPassword());
	}
	
	@PostMapping("/login")
	public LoginResponseDTO loginUser(@RequestBody RegistrationDTO body) {	
		System.out.println(body.getUsername()+" "+ body.getPassword()+"Inside Authentication controller ");
		return authenticationService.loginUser(body.getUsername(), body.getPassword());
	}

}
