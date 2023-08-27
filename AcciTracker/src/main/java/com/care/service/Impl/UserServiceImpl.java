package com.care.service.Impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.care.Dto.LoginDto;
import com.care.Dto.UserDto;
import com.care.Repo.UserRepo;
import com.care.entities.User;
import com.care.payloads.LoginResponse;
import com.care.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepo userRepo;
	
	@Autowired
    private PasswordEncoder passwordEncoder;
	
	@Override
	public String addUser(UserDto userDto) {
		User user = new User(
			
			userDto.getId(),
			userDto.getFirstName(),
			userDto.getLastName(),
			userDto.getEmailId(),
			userDto.getMobileNo(),
			this.passwordEncoder.encode(userDto.getPassword())
				
				);
		userRepo.save(user);
		
		return user.getEmailId();
	}
	
	UserDto userDto;

	@Override
	public LoginResponse loginUser(LoginDto loginDto) {
		
		String msg = "";
        User user1 = userRepo.FindByEmail(loginDto.getEmailId());
        if (user1 != null) {
            String password = loginDto.getPassword();
            String encodedPassword = user1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<User> user = userRepo.findByEmailAndPassword(loginDto.getEmailId(), encodedPassword);
                if (user.isPresent()) {
                    return new LoginResponse("Login Success", true);
                } else {
                    return new LoginResponse("Login Failed", false);
                }
            } else {
                return new LoginResponse("password Not Match", false);
            }
        }else {
            return new LoginResponse("Email not exits", false);
        }
	}

}
