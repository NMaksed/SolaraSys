package com.umc.build.controller;


import com.umc.build.dto.UserDTO;
import com.umc.build.model.User;
import com.umc.build.serviceImpl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import java.util.Base64;
import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController{

    @Autowired
    private UserServiceImpl userService;

    @PostMapping("/salvar{id}")
    public ResponseEntity<String> salvarUsuario (@RequestBody UserDTO userDTO, @RequestParam("id") Integer funcionarioId) {
        try {
            userService.validatorFuncionario(funcionarioId);
            userService.salvarUsuario(userDTO, funcionarioId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return ResponseEntity.ok("Novo usuário adicionado!");
    }

    @GetMapping("getUsuario")
    public List<User> getAllUsuarios() {return userService.getUsuario(); }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        try {
            userService.validatorUsuario(user.getEmail(), user.getSenha());
            byte[] tokenBytes = userService.geradorToken(user);
            String token = Base64.getEncoder().encodeToString(tokenBytes);
            return ResponseEntity.ok(token);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Erro ao passar usuario: " + e.getMessage());
        }
    }
}
