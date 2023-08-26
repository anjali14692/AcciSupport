package com.care.payloads;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class UserDto {
	
	private int id;
	@NotEmpty
	@Size(min = 4, message = "Username must be min of 4 characters !!")
	private String firstName;
	@NotEmpty
	@Size(min = 4, message = "Username must be min of 4 characters !!")
	private String lastName;
	@Email(message = "Email address is not valid !!")
	@NotEmpty(message = "Email is required !!")
	private String emailId;
	@NotEmpty
	@Size(min = 3, max = 10, message = "Password must be min of 3 chars and max of 10 chars !!")
	private String password;
	private long mobileNo;

}
