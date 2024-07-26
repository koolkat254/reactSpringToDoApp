package com.hodges.todoAppApi.repositories;

import com.hodges.todoAppApi.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
    User findByEmail(String email);
}
