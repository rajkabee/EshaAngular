package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
@RestResource
@CrossOrigin("http://localhost:4200")
public interface TutorialRepo extends JpaRepository<Tutorial, Integer> {

}
