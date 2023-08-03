package com.umc.build.service;

import com.umc.build.model.User;


import java.util.List;

public interface UserService {

    public User salvarUsuario(User user);
    public List<User> getUsuario();
}
