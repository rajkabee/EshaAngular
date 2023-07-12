package com.example.demo.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demo.entities.Category;
@RestResource
@CrossOrigin("http://localhost:4200")
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
