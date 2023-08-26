package com.care.services.Impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.care.entities.User;
import com.care.exceptions.ResourceNotFoundException;
import com.care.payloads.UserDto;
import com.care.repositories.UserRepo;
import com.care.services.UserService;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public UserDto createUser(UserDto userDto) {
		
		User user =this.dtoToUser(userDto);
		User savedUser = this.userRepo.save(user); 
		
		return this.userToDto(savedUser);
	}

	@Override
	public UserDto updateUser(UserDto userDto, Integer userId) {
		
		User user = this.userRepo.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User", "Id", userId));
		
		user.setFirstName(userDto.getFirstName());
		user.setLastName(userDto.getLastName());
		user.setEmailId(userDto.getEmailId());
		user.setPassword(userDto.getPassword());
		user.setMobileNo(userDto.getMobileNo());
		
		User updatedUser = this.userRepo.save(user);
		UserDto userDto1 = this.userToDto(updatedUser);
		return userDto1;
	}

	@Override
	public UserDto getUserById(Integer userId) {
		User user = this.userRepo.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User", " Id ", userId));

		return this.userToDto(user);
	}

	@Override
	public List<UserDto> getAllUsers() {
		
		List<User> users = this.userRepo.findAll();
		List<UserDto> userDtos = users.stream().map(user -> this.userToDto(user)).collect(Collectors.toList());

		return userDtos;
	}

	@Override
	public void deleteUser(Integer userId) {
		
		User user = this.userRepo.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User", "Id", userId));
		this.userRepo.delete(user);
		
	}
	
	public User dtoToUser(UserDto userDto) {
		
		
		User user = this.modelMapper.map(userDto, User.class);
		/*
		 * User user = new User();
		 * user.setId(userDto.getId()); user.setFirstName(userDto.getFirstName());
		 * user.setLastName(userDto.getLastName());
		 * user.setEmailId(userDto.getEmailId());
		 * user.setPassword(userDto.getPassword());
		 * user.setMobileNo(userDto.getMobileNo());
		 */
		return user;
	}
	
	public UserDto userToDto (User user) {
		
		UserDto userDto = this.modelMapper.map(user, UserDto.class);
		/*
		 * UserDto userDto = new UserDto(); userDto.setId(user.getId());
		 * userDto.setFirstName(user.getFirstName());
		 * userDto.setLastName(user.getLastName());
		 * userDto.setEmailId(user.getEmailId());
		 * userDto.setPassword(user.getPassword());
		 * userDto.setMobileNo(user.getMobileNo());
		 */
		 return userDto;
				
	}

}
