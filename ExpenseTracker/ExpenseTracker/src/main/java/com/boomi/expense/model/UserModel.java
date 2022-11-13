package com.boomi.expense.model;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.Data;

@Data
public class UserModel {
	
	@NotBlank(message = "Name should not be empty")
	private String name;

	@NotBlank(message = "Email should not be empty")
	@Email(message = "Enter a valid email")
	private String email;
	
	@NotBlank(message = "Password should not be empty")
	@Size(min = 5, message = "Password should be atleast 5 characters")
	private String password;
	
	private String address;
}
