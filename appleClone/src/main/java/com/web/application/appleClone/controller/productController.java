package com.web.application.appleClone.controller;

import com.web.application.appleClone.apple.Apple;
import com.web.application.appleClone.service.AppleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class productController {

    @Autowired
    private AppleService productService;

    @GetMapping("/products")
    public String showProductsPage(Model model) {

        List<Apple> products = productService.getAllProducts();

        model.addAttribute("products", products);

        return "products";
    }

    @GetMapping("/productDetails")
    public String showProductDetailPage(Model model) {

        List<Apple> products = productService.getAllProducts();

        model.addAttribute("products", products);

        return "productDetails";
    }
}
