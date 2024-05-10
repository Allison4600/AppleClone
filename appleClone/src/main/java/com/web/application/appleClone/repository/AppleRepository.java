package com.web.application.appleClone.repository;

import com.web.application.appleClone.apple.Apple;
import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;

//@Repository
public interface AppleRepository extends JpaRepository<Apple, Integer> {
}