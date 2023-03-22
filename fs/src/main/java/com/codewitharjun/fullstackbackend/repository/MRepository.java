package com.codewitharjun.fullstackbackend.repository;


import com.codewitharjun.fullstackbackend.model.M;
import com.codewitharjun.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MRepository extends JpaRepository<M,Long> {
}
