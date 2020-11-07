package com.crud.employees.controller;

import com.crud.employees.model.UserEntity;
import com.crud.employees.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.jws.soap.SOAPBinding;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(method = RequestMethod.GET, value = "users")
    public List<UserEntity> getAllUsers()
    {
        return userService.getAllUsers();
    }

    @RequestMapping(method = RequestMethod.GET, value = "users/{id}")
    public UserEntity getUserById(@PathVariable Long id)
    {
        return userService.getUserById(id);
    }

    @RequestMapping(method = RequestMethod.POST, value = "users")
    public void createUser(@RequestBody UserEntity userEntity)
    {
        userService.createUser(userEntity);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "users/{id}")
    public void updateUser(@PathVariable Long id, @RequestBody UserEntity userEntity)
    {
        userService.updateUser(id, userEntity);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "users/{id}")
    public void deleteUser(@PathVariable Long id)
    {
        userService.deleteUser(id);
    }
}
