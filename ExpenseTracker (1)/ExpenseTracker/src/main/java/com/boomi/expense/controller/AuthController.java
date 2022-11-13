package com.boomi.expense.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.boomi.expense.model.AuthModel;
import com.boomi.expense.model.User;
import com.boomi.expense.model.UserModel;
import com.boomi.expense.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class AuthController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@PostMapping("/register")
	public ResponseEntity<User> save(@Valid @RequestBody UserModel user) {
		return new ResponseEntity<User>(userService.create(user), HttpStatus.CREATED);
	}
	
	@PostMapping("/login")
	public ResponseEntity<HttpStatus> login(@RequestBody AuthModel authModel) {
	Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authModel.getEmail(), authModel.getPassword()));
	SecurityContextHolder.getContext().setAuthentication(authentication);
	return new ResponseEntity<HttpStatus>(HttpStatus.OK);
	}
	
}
