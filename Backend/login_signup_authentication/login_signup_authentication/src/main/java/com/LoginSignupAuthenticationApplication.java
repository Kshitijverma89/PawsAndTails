package com;

import java.util.HashSet;
import java.util.Set;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.models.ApplicationUser;
import com.models.Roles;
import com.repository.RoleRepository;
import com.repository.UserRepository;

@SpringBootApplication
public class LoginSignupAuthenticationApplication {

	public static void main(String[] args) {
		SpringApplication.run(LoginSignupAuthenticationApplication.class, args);
	}
	
	/*To have atleast one user while database is loading*/
	@Bean
	CommandLineRunner run(RoleRepository roleRepository, UserRepository userRepository, PasswordEncoder passwordEncoder ) {
		return args->{
			if(roleRepository.findByAuthority("ADMIN").isPresent()) return;
			Roles adminRole = roleRepository.save(new Roles("ADMIN"));
			roleRepository.save(new Roles("USER"));
			
			Set<Roles> roles = new HashSet<>();
			roles.add(adminRole);
			
			ApplicationUser admin = new ApplicationUser("Kshitij", "Verma", "kshitijverma89@gmail.com", "9854222165", "admin", passwordEncoder.encode("password"),roles);
			
			userRepository.save(admin);
		};
	}
}
