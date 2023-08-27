package com.care.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.care.Dto.LoginDto;
import com.care.Dto.UserDto;
import com.care.payloads.LoginResponse;
import com.care.service.UserService;

@CrossOrigin("*")
@RestController
@RequestMapping("/users")
public class UserController {
	
	  	@Autowired
	    private UserService userService;
	  	
	    @PostMapping(path = "/save")
	    public String saveUser(@RequestBody UserDto userDto)
	    {
	        String id = userService.addUser(userDto);
	        return id;
	    }
	    @PostMapping(path = "/login")
	    public ResponseEntity<?> loginUser(@RequestBody LoginDto loginDto)
	    {
	        LoginResponse loginResponse = userService.loginUser(loginDto);
	        return ResponseEntity.ok(loginResponse);
	    }


}
