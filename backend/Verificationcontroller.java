package com.ekart.backend.controller;

import com.ekart.backend.model.Verification;
import com.ekart.backend.service.Verificationservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/verify")
@CrossOrigin
public class Verificationcontroller {

    @Autowired
    private Verificationservice service;

    @PostMapping("/checkcredentials")
    public boolean get(@RequestBody Verification input) {
        return service.chk(input.getUsername(),input.getPassword());
    }

    @PostMapping("/add")
    public boolean add(@RequestBody Verification data)
    {
        service.add(data);
        return true;
    }

    @RequestMapping("/findid")
    public int id()
    {
        return service.findid();
    }
}
