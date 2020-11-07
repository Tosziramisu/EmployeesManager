package com.crud.employees.service;

import com.crud.employees.model.UserEntity;
import com.crud.employees.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<UserEntity> getAllUsers()
    {
        return userRepository.findAll();
    }

    public UserEntity getUserById(Long id) {
        return userRepository.findById(id).get();
    }

    public void createUser(UserEntity userEntity) {
        userRepository.save(userEntity);
    }

    public void updateUser(Long id, UserEntity userEntity) {
        UserEntity updatedUser = userRepository.findById(id).get();
        updatedUser.setUsername(userEntity.getUsername());
        updatedUser.setPassword(userEntity.getPassword());
        userRepository.save(updatedUser);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
