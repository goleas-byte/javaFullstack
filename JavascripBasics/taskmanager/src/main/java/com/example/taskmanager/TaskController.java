package com.example.taskmanager;
import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;

@RestController
@RequestMapping("/tasks")
public class TaskController {
private final List<Task> tasks = new ArrayList<>();
public TaskController() {
tasks.add(new Task(1, "Learn Spring Boot", false));
tasks.add(new Task(2, "Complete FSD experiment", false));
}
@GetMapping
public List<Task> getAllTasks() {
return tasks;
}
@GetMapping("/{id}")
public Task getTaskById(@PathVariable int id) {
for (Task task : tasks) {
if (task.getId() == id) {
return task;
}
}
return null;
}
@PostMapping
public Task addTask(@RequestBody Task task) {
tasks.add(task);
return task;
}
@PutMapping("/{id}")
public Task updateTask(@PathVariable int id, @RequestBody Task updatedTask) {
for (Task task : tasks) {
if (task.getId() == id) {
task.setTitle(updatedTask.getTitle());
task.setCompleted(updatedTask.isCompleted());
return task;
}
}
return null;
}
@DeleteMapping("/{id}")
public String deleteTask(@PathVariable int id) {
boolean removed = tasks.removeIf(task -> task.getId() == id);
if (removed) {
return "Task deleted";
}
return "Task not found";
}
}