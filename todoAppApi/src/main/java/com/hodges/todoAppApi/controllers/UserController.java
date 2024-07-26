package com.hodges.todoAppApi.controllers;

import com.hodges.todoAppApi.JwtService;
import com.hodges.todoAppApi.models.User;
import com.hodges.todoAppApi.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/user")
//@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtService jwtService;

    @PostMapping("/newUser")
    public User createUser(@RequestParam String email,
                           @RequestParam String firstName,
                           @RequestParam String lastName,
                           @RequestParam String password,
                           @RequestParam String verifyPassword){

        if (password.equals(verifyPassword)){
            User newUser = new User();
            String hashedPassword = passwordEncoder.encode(password);
            newUser.setEmail(email);
            newUser.setFirstName(firstName);
            newUser.setLastName(lastName);
            newUser.setHashedPassword(hashedPassword);
            newUser.setRole("basic");

            return userRepository.save(newUser);
        } else {
            throw new IllegalArgumentException("Passwords do not match");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestParam String email,
                                       @RequestParam String password) {
        User userLoggingIn = userRepository.findByEmail(email);

        if (userLoggingIn == null || !passwordEncoder.matches(password, userLoggingIn.getHashedPassword())) {
            throw new IllegalArgumentException("Cannot find user/password combo");
        }

        String token = jwtService.generateToken(userLoggingIn);

        Map<String, Object> response = new HashMap<>();
        response.put("token", token);
        response.put("user", userLoggingIn);

        return ResponseEntity.ok(response);
    }

}
