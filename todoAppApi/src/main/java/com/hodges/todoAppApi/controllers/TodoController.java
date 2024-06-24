package com.hodges.todoAppApi.controllers;

import com.hodges.todoAppApi.models.Todo;
import com.hodges.todoAppApi.repositories.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/todos")
//@CrossOrigin(origins = "http://localhost:5173")
public class TodoController {

    @Autowired
    private TodoRepository todoRepository;

    @GetMapping
    public List<Todo> getAllTodos(){
        return todoRepository.findAll();
    }

    @PostMapping("/delete")
    public void deleteTodo(@RequestParam Long todoId) {
        todoRepository.deleteById(todoId);
    }

    @PostMapping("/new")
    public Todo createTodo(@RequestParam String description, @RequestParam String assigned){
        Todo newTodo = new Todo();
        newTodo.setDescription(description);
        newTodo.setAssigned(assigned);
        return todoRepository.save(newTodo);
    }
}
