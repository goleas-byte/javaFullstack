package com.example.studentapi; 
import org.springframework.data.annotation.Id; 
import org.springframework.data.mongodb.core.mapping.Document; 
@Document(collection = "students") 
public class Student { 
 @Id 
 private String id; 
 private String name; 
 private int age; 
 private String course;
 public Student() { 
 } 
 public Student(String name, int age, String course) { 
 this.name = name; 
 this.age = age; 
 this.course = course; 
 } 
 public String getId() { 
 return id; 
 } 
 public void setId(String id) { 
 this.id = id; 
 } 
 public String getName() { 
 return name; 
 } 
 public void setName(String name) { 
 this.name = name; 
 } 
 public int getAge() { 
 return age; 
 } 
 public void setAge(int age) { 
 this.age = age; 
 } 
 public String getCourse() { 
 return course; 
 } 
 public void setCourse(String course) { 
 this.course = course; 
 } 
} 
