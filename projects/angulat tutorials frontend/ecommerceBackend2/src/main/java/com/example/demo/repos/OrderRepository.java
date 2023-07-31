package com.example.demo.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demo.entities.Order;
@RestResource
@CrossOrigin("http://localhost:4200")
public interface OrderRepository extends JpaRepository<Order, Long>{

}
