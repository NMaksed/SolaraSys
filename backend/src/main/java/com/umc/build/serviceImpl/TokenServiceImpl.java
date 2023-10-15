package com.umc.build.serviceImpl;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.SignatureException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Base64;

@Component
public class TokenServiceImpl {

    private final UserServiceImpl userService;
    private final String secretKey;

    public TokenServiceImpl(UserServiceImpl userService) {
        this.userService = userService;
        this.secretKey = userService.generateHs256().toString();
    }

    public Claims parseToken(String jwtToken) {
        try {
            String[] tokenParts = jwtToken.split("\\.");
            int tamanho = tokenParts.length;
            // Verifique se existem três partes
            if (tokenParts.length != 3) {
                return null; // Formato inválido
            }

            // Decodifique o payload (a segunda parte)
            String decodedPayload = new String(Base64.getDecoder().decode(tokenParts[1]));

            Claims claims = Jwts.parser()
                    .setSigningKey(secretKey.getBytes()) // Substitua com sua chave secreta real
                    .parseClaimsJws(jwtToken)
                    .getBody();
            return claims;
        }  catch (SignatureException e) {
            // Se a assinatura do token não puder ser verificada, o token é inválido
            return null;
        }
    }
}
