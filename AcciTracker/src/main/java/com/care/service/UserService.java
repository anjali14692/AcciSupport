package com.care.service;

import com.care.Dto.LoginDto;
import com.care.Dto.UserDto;
import com.care.payloads.LoginResponse;

public interface UserService {
	
	 String addUser(UserDto userDto);
	    LoginResponse loginUser(LoginDto loginDto);

}
