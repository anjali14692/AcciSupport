package com.care.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
@AllArgsConstructor
public class UserDto {
	

	private int id;
	private String firstName;
	private String lastName;
	private String emailId;
	private String password;
	private long mobileNo;

}
