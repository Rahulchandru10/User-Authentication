package com.ekart.backend.service;

import com.ekart.backend.model.Verification;
import com.ekart.backend.repository.Verificationrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

@Service
public class Verificationservice {

    @Autowired
    private Verificationrepository repository;

    public boolean chk(String username,String password) {
        List <Verification> ob = repository.findAll();
        for(Verification ver : ob)
        {
            if(ver.getUsername().equals(username) && ver.getPassword().equals(password))
                return true;
        }
        return false;
    }

    public void add(Verification data)
    {
        repository.save(data);
    }

    public int findid()
    {
        List<Verification> a = repository.findAll();
        return a.size()+1;
    }
}
