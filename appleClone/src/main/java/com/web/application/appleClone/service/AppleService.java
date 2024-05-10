package com.web.application.appleClone.service;

import com.web.application.appleClone.apple.Apple;
import com.web.application.appleClone.repository.AppleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppleService {

    @Autowired
    private AppleRepository appleRepository;
    private String cpu;

    public List<Apple> getAllProducts() {
        return appleRepository.findAll();
    }
}


