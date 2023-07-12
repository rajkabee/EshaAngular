package com.example.demo.entities;

import java.sql.Date;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;
@Entity
@Data
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
