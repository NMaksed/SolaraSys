package com.umc.build.serviceImpl;

import com.umc.build.dto.UserDTO;
import com.umc.build.model.Funcionario;
import com.umc.build.model.User;
import com.umc.build.repository.FuncionarioRepository;
import com.umc.build.repository.UserRepository;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.security.SecureRandom;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl {

    @Autowired
    public UserRepository userRepository;

    @Autowired
    public FuncionarioRepository funcionarioRepository;

    public User salvarUsuario(UserDTO userDTO, Integer idCondominio) {
        User user = new User();
        user.setEmail(userDTO.getEmail());
        user.setSenha(userDTO.getSenha());
        user.setAdministrador(userDTO.isAdministrador());
        Funcionario funcionario = funcionarioRepository.idFuncionario(idCondominio);
        user.setFuncionario(funcionario);
        user.setEmpresa(funcionario.getEmpresa());
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

    public void getEmpresaVinculada(String email) {
        userRepository.findByEmail(email);
    }

    public User validatorUsuario(String email, String senha) throws Exception {
        Optional<User> usuarioOptional = userRepository.findByEmailAndAndSenha(email, senha);

        if (usuarioOptional.isEmpty()) {
            throw new Exception("Senha ou Email Incorreto!!");
        }
        return usuarioOptional.get();
    }

    /*
    * Gera um token para autorização de login
     */
    public String geradorToken(User user) {
        Key key = generateSecretKey();

        JwtBuilder token = Jwts.builder()
                .setSubject(user.getEmail())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 20 * 60 * 1000))
                .signWith(key, SignatureAlgorithm.HS256);

        return token.compact();
    }

    /*
    * Cria uma chave do tipo HS256
     */
    public Key generateSecretKey() {
        int keySizeBytes = 32;

        byte[] secretKeyBytes = new byte[keySizeBytes];
        new SecureRandom().nextBytes(secretKeyBytes);

        return Keys.hmacShaKeyFor(secretKeyBytes);
    }
}
