package com.umc.build.controller;


import com.umc.build.dto.UserDTO;
import com.umc.build.model.Empresa;
import com.umc.build.model.User;
import com.umc.build.serviceImpl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import java.util.Base64;
import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserServiceImpl userService;

    @PostMapping("/salvar{id}")
    public ResponseEntity<String> salvarUsuario(@RequestBody UserDTO userDTO, @RequestParam("id") Integer funcionarioId) {
        try {
            userService.validatorFuncionario(funcionarioId);
            userService.salvarUsuario(userDTO, funcionarioId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return ResponseEntity.ok("Novo usuário adicionado!");
    }

    @GetMapping("getUsuario")
    public List<User> getAllUsuarios() {
        return userService.getUsuario();
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody User user) {
        try {
            HttpHeaders header = new HttpHeaders();

            User usuario = userService.validatorUsuario(user.getEmail(), user.getSenha());
            String token = userService.geradorToken(user);
            header.add("Content-Type", "application/json");
            AuthResponse response = new AuthResponse(token, usuario);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            AuthResponse errorResponse = new AuthResponse("Erro ao autenticar: " + e.getMessage(), null);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(errorResponse);
        }
    }
}