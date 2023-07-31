package com.example.demo.entities;

import java.sql.Date;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.*;
import lombok.*;
@Entity
@Getter
@Setter
@ToString
@Table(name="product_category")
public class Category {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	long id;
	String category_name;
	@OneToMany
	List<Product> products;
	@CreationTimestamp
	Date date_created;
	@UpdateTimestamp
	Date last_updated;
}
