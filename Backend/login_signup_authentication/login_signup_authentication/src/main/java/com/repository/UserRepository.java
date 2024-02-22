package com.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.models.ApplicationUser;

import jakarta.transaction.Transactional;

@Repository
public interface UserRepository extends JpaRepository<ApplicationUser, Integer> {
	
	Optional<ApplicationUser> findByUsername(String username);

	@Query("select u from ApplicationUser u")
	public List<ApplicationUser> findAllUsers();

	@Query("delete from ApplicationUser u where u.userId = ?1")
	List<ApplicationUser> deleteUserById(Integer id);

	public ApplicationUser getUserByUsername(String username);
	
	 @Query("SELECT u FROM ApplicationUser u WHERE u.userId = :userId")
	  public  ApplicationUser findUserById(Integer userId);

	public Optional<ApplicationUser> save(Optional<ApplicationUser> user);
	
	@Modifying
	 @Transactional
	 @Query("UPDATE ApplicationUser u SET u.firstName = :newFirstName, u.lastName = :newLastName, u.email = :newEmail, u.mobileNo = :newMobileNo WHERE u.userId = :userId")
	  void updateUser(Integer userId, String newFirstName,String newLastName, String newEmail,String newMobileNo);

}
