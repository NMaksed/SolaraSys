package com.umc.build.controller;


import com.umc.build.model.User;
import com.umc.build.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/user")
public class UserController{

    @Autowired
    private UserService userService;

    @PostMapping("adicionarUsuario")
    public ResponseEntity<String> salvarUsuario (@RequestBody User user) {
        userService.salvarUsuario(user);
        return ResponseEntity.ok("Novo usuário adicionado!");
    }

    @GetMapping("getUsuario")
    public List<User> getAllUsuarios() {return userService.getUsuario(); }

}
