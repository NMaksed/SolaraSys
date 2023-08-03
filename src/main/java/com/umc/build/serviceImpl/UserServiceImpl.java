package com.umc.build.serviceImpl;

import com.umc.build.model.User;
import com.umc.build.repository.UserRepository;
import com.umc.build.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    public UserRepository userRepository;
    @Override
    public User salvarUsuario(User user) {
        return userRepository.save(user);
    }
    @Override
    public List<User> getUsuario() {
        return userRepository.findAll();
    }
}
