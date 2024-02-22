package com.services;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.stereotype.Service;

import com.models.ApplicationUser;
import com.repository.UserRepository;

import jakarta.servlet.http.HttpServletRequest;

@Service
public class UserService implements UserDetailsService {

	@Autowired
	private PasswordEncoder encoder;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private JwtDecoder jwtDecoder;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		System.out.println("In the user details service");

		return userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("Invalid user"));
	}

	public List<ApplicationUser> getAllUsers() {
		List<ApplicationUser> userList = userRepository.findAllUsers();
		return userList;
	}

	public void deleteById(Integer id) {
		// TODO Auto-generated method stub
		userRepository.deleteById(id);
	}

	public ApplicationUser findUserByJwt(HttpServletRequest request) {
		// TODO Auto-generated method stub
		System.out.println(56);
		String authorizationHeader = request.getHeader("Authorization");
		System.out.println(authorizationHeader);
		System.out.println(authorizationHeader.startsWith("Bearer "));

		if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
			// Extract the token part (substring after "Bearer ")
			String token = authorizationHeader.substring(7);
			
			System.out.println(63);

			Jwt jwt = jwtDecoder.decode(token);

			String username = jwt.getSubject();

			Optional<com.models.ApplicationUser> user = userRepository.findByUsername(username);

			return user.get();
		} else {

			return null;
		}

	}

	public ApplicationUser getUserById(Integer id) {
        return userRepository.findById(id).orElse(null);
    }
	
	 public void updateUserById(Integer id, ApplicationUser updatedUser) {
		 ApplicationUser user = userRepository.findUserById(id);
		 if (user != null) { 
			 user.setFirstName(updatedUser.getFirstName());
	            user.setLastName(updatedUser.getLastName());
	            user.setEmail(updatedUser.getEmail());
	            user.setMobileNo(updatedUser.getMobileNo());
	            userRepository.save(user);
	            
	        } 
	    }
	 
	 public ApplicationUser getCurrentUser() {
	        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
	        String username = authentication.getName();
	        return userRepository.findByUsername(username).orElse(null);
	    }
	 
	 public void updateUser(ApplicationUser updatedUser) {
		    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		    String username = authentication.getName();
		    ApplicationUser currentUser = userRepository.findByUsername(username)
		            .orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));
		    
		    currentUser.setFirstName(updatedUser.getFirstName());
		    currentUser.setLastName(updatedUser.getLastName());
		    currentUser.setEmail(updatedUser.getEmail());
		    currentUser.setMobileNo(updatedUser.getMobileNo());
		    
		    userRepository.save(currentUser);
		}

}
