package com.umc.build.serviceImpl;

import com.umc.build.model.Funcionario;
import com.umc.build.model.User;
import com.umc.build.repository.FuncionarioRepository;
import com.umc.build.repository.UserRepository;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.security.Key;
import java.security.SecureRandom;
import java.util.Base64;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl {

    @Autowired
    public UserRepository userRepository;

    @Autowired
    public FuncionarioRepository funcionarioRepository;

    public User salvarUsuario(User user) {
        return userRepository.save(user);
    }

    public List<User> getUsuario() {
        return userRepository.findAll();
    }
    public void validatorFuncionario(Integer id) throws Exception {
        Optional<Funcionario> funcionarioOptional = funcionarioRepository.findById(id);

        if (funcionarioOptional.isEmpty()) {
            throw new Exception("Funcionario Inexistente!!");
        }
    }

    public void validatorUsuario(String email, String senha) throws Exception {
        Optional<User> usuarioOptional = userRepository.findByEmailAndAndSenha(email, senha);

        if (usuarioOptional.isEmpty()) {
            throw new Exception("Senha ou Email Incorreto!!");
        }
    }

    /*
    * Gera um token para autorização de login
     */
    public byte[] geradorToken(User user) {
        Key key = generateHs256();

        JwtBuilder token = Jwts.builder()
                .setSubject(user.getEmail())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 20 * 60 * 1000))
                .signWith(key, SignatureAlgorithm.HS256);

        return token.compact().getBytes();
    }

    /*
    * Cria uma chave do tipo HS256
     */
    public Key generateHs256() {
        int keySizeBytes = 32;

        byte[] secretKeyBytes = new byte[keySizeBytes];
        new SecureRandom().nextBytes(secretKeyBytes);

        return Keys.hmacShaKeyFor(secretKeyBytes);
    }
}
