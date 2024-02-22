package com.services;

import java.time.Instant;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.stereotype.Component;

@Component
public class TokenService {
	
	@Autowired
	private JwtEncoder jwtEncoder;
	
	@Autowired
	private JwtDecoder jwtDecoder;
	
	public String generateJwt( Authentication auth) {
		
		Instant now = Instant.now(); 
		
		String scope = auth.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.joining(" "));
		
		//Looping all the authorities inside auth
		//auth us Authentication object which has all the roles from our user
		//User roles are being mapped to GrantedAuthority
		//these mapped roles are combined using Collector.joining(" ") into a single string
		
		JwtClaimsSet clamis = JwtClaimsSet.builder()
				.issuer("self")
				.issuedAt(now)
				.subject(auth.getName())
				.claim("roles", scope)
				.build();
				
		//returning a string
		return jwtEncoder.encode(JwtEncoderParameters.from(clamis)).getTokenValue();
	}
}
