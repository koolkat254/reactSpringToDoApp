package com.hodges.todoAppApi.repositories;

import com.hodges.todoAppApi.models.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo,Long> {
}
