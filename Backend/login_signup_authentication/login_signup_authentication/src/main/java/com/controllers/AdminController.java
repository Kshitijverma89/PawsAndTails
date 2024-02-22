package com.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.dto.UserDTO;
import com.models.ApplicationUser;
import com.services.UserService;

@RestController
@RequestMapping("/admin")
//@CrossOrigin("*")
@CrossOrigin(origins = "http://localhost:3000", methods = {RequestMethod.DELETE, RequestMethod.GET} )
public class AdminController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/")
	public String helloAdminController() {
		return "Admin level access";
	}
	
	@GetMapping("/users")
	public UserDTO fetchUsers() {
		List<ApplicationUser> user= userService.getAllUsers();
		UserDTO userDto = new UserDTO();
		
		userDto.setStatus(UserDTO.Status.OK);
		userDto.setUser(user);
		userDto.setCount(user.size());
		
		return userDto;

	}
	
	@DeleteMapping("/users/{id}")
	public String DeleteUsers(@PathVariable Integer id ) {
		userService.deleteById(id);
		return "success";
	}
	
	@GetMapping("/users/{id}")
    public ApplicationUser fetchUserById(@PathVariable Integer id) {
        return userService.getUserById(id);
    }
	
	@PutMapping("/users/{id}")
	 public String updateUserById(@PathVariable Integer id, @RequestBody ApplicationUser updatedUser) {
       try {
           userService.updateUserById(id, updatedUser);
           return "success";
       } catch (RuntimeException e) {
           return "Error";
       }
   }
}
