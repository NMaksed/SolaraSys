package com.umc.build.serviceImpl;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.SignatureException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.UnsupportedEncodingException;
import java.util.Base64;

@Component
public class TokenServiceImpl {

    private final UserServiceImpl userService;
    private final String secretKey;

    public TokenServiceImpl(UserServiceImpl userService) {
        this.userService = userService;
        this.secretKey = userService.generateSecretKey().toString();
    }

    public Claims parseToken(String jwtToken) {
        try {
            String[] tokenParts = jwtToken.split("\\.");

            // Decodifique o payload (a segunda parte)
            String header = new String(Base64.getUrlDecoder().decode(tokenParts[0]));
            String payload = new String(Base64.getUrlDecoder().decode(tokenParts[1]));

            Claims claims = Jwts.parser()
                    .setSigningKey(secretKey.getBytes())
                    .parseClaimsJws(jwtToken)
                    .getBody();
            return claims;
        }  catch (SignatureException e) {
            // Se a assinatura do token não puder ser verificada, o token é inválido
            return null;
        }
    }
}
