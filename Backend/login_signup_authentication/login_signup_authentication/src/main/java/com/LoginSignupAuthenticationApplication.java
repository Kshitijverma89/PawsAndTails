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
			roleRepository.save(new Roles("SELLER"));
			
			Set<Roles> roles = new HashSet<>();
			roles.add(adminRole);
			
			ApplicationUser admin_1 = new ApplicationUser("Kshitij", "Verma", "kshitijverma89@gmail.com", "9854222165", "admin@Kshitij", passwordEncoder.encode("password"),roles);
			ApplicationUser admin_2 = new ApplicationUser("Anuja", "Gupta", "AnujaGupta@gmail.com", "8465122122", "admin@Anuja", passwordEncoder.encode("password"),roles);
			ApplicationUser admin_3 = new ApplicationUser("Namrata", "Bhandighare", "NamrataB@gmail.com", "8121232122", "admin@Namrata", passwordEncoder.encode("password"),roles);
			userRepository.save(admin_1);
			userRepository.save(admin_2);
			userRepository.save(admin_3);
		};
	}
}
