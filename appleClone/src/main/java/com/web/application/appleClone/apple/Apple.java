package com.web.application.appleClone.apple;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "productdetails")
@NoArgsConstructor
@AllArgsConstructor
public class Apple {

    @Id
    @GeneratedValue
    private int product_id;
    private String product_cpu;
    private String product_gpu;
    private String product_unified_memory;
    private String product_ssd_storage;
    private String product_size;
    private String content;
    private String keyboard;
    private String trackpad;
    private String adaptor;
    private String price;
    private String discount_price;

}
