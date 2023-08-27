package com.care.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.care.entities.User;

@Repository
@EnableJpaRepositories
public interface UserRepo extends JpaRepository<User, Integer> {
	
	Optional<User> findByEmailAndPassword (String emailId, String password);
	User FindByEmail (String eamilId);
}
