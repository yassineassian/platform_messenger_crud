package com.codewitharjun.fullstackbackend.controller;

import com.codewitharjun.fullstackbackend.model.M;
import com.codewitharjun.fullstackbackend.model.User;
import com.codewitharjun.fullstackbackend.repository.MRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/* Created by Arjun Gautam */
@RestController
@CrossOrigin("http://localhost:3000")
public class MController {
    @Autowired
    private MRepository mRepository;
    @GetMapping("/u")
    List<M> getAllUsers() {
        return mRepository.findAll();
    }
    @PostMapping("/s")
    M newUser(@RequestBody M newUser) {
        return mRepository.save(newUser);
    }

}
