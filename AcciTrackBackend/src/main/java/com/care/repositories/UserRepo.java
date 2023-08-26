package com.care.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.care.entities.User;

public interface UserRepo extends JpaRepository<User, Integer> {

}
