package com.umc.build.serviceImpl;

import com.umc.build.model.User;
import com.umc.build.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl {

    @Autowired
    public UserRepository userRepository;

    public User salvarUsuario(User user) {
        return userRepository.save(user);
    }

    public List<User> getUsuario() {
        return userRepository.findAll();
    }

    public void validatorUsuario(String email, String senha) throws Exception {
        Optional<User> usuarioOptional = userRepository.findByEmailAndAndSenha(email, senha);

        if (usuarioOptional.isEmpty()) {
            throw new Exception("Senha ou Email Incorreto!!");
        }
    }
}
