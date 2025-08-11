package com.example.SpringBootRestAPI.entity;




import jakarta.persistence.Entity;

import jakarta.persistence.GeneratedValue;

import jakarta.persistence.GenerationType;

import jakarta.persistence.Id;

import jakarta.persistence.Table;

import lombok.AllArgsConstructor;

import lombok.Data;

import lombok.NoArgsConstructor;




@Entity

@Table(name = "tb1_employees")

@Data

@AllArgsConstructor

@NoArgsConstructor

public class Employee {

@Id

@GeneratedValue(strategy = GenerationType.IDENTITY)

private Long id;

private String name;
private String gender;

private String department;

private String location;

public Long getId() {
    return id;
}



public String getName() {
	return name;
}

public void setName(String name) {
	this.name = name;
}

public String getDepartment() {
	return department;
}

public void setDepartment(String department) {
	this.department = department;
}

public String getLocation() {
	return location;
}

public void setLocation(String location) {
	this.location = location;
}



public String getGender() {
	return gender;
}



public void setGender(String gender) {
	this.gender = gender;
}

}