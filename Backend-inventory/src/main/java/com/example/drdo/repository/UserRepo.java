package com.example.drdo.repository;




import org.springframework.data.jpa.repository.JpaRepository;

import com.example.drdo.entity.User;





public interface UserRepo  extends JpaRepository<User, Long>{

}

