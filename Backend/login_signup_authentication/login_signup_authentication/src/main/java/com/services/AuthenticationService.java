package com.services;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.dto.LoginResponseDTO;
import com.models.ApplicationUser;
import com.models.Roles;
import com.repository.RoleRepository;
import com.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class AuthenticationService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private TokenService tokenService;
	
	public ApplicationUser registerUser(String firstName,
										String lastName,
										String email,
										String mobNo,
										String username,
										String password) {
		String encodedPassword = passwordEncoder.encode(password);
		Roles userRole= roleRepository.findByAuthority("USER").get();
		
		Set<Roles> authorities = new HashSet<>();
		
		authorities.add(userRole);
		return userRepository.save(new ApplicationUser(firstName, lastName, email, mobNo, username, encodedPassword, authorities));
		
	}
	
	//Purpose: Upon receiving the user request, 
	//the username and password will be passed to this authenticationManager,
	//which is going to use our UserDetailService 
	//to grab the user and if the username and password does exists it will return a token
	
	public LoginResponseDTO loginUser(String username, String password) {
		System.out.println(username+" "+password);
		
		try {
			Authentication auth = authenticationManager.authenticate(
			new UsernamePasswordAuthenticationToken(username, password)		
			);
			System.out.println(auth +"This is auth");
			String token= tokenService.generateJwt(auth);
			
			return new LoginResponseDTO(userRepository.findByUsername(username).get(), token);
			
		}catch(AuthenticationException e) {
			return new LoginResponseDTO(null, " ");
		}
	
	}
	
}
