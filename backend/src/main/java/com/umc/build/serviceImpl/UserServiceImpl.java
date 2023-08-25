package com.umc.build.serviceImpl;

import com.umc.build.model.User;
import com.umc.build.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
}
