package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Tutorial {
	@Id
	@GeneratedValue
	int id;
	String title;
	String description;
	boolean published;
	public Tutorial(String title, String description, boolean published) {
		super();
		this.title = title;
		this.description = description;
		this.published = published;
	}
	
}
