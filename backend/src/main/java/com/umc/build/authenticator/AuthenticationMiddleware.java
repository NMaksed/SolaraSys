package com.umc.build.authenticator;

import com.umc.build.serviceImpl.UserServiceImpl;
import io.jsonwebtoken.Jwts;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
public class AuthenticationMiddleware implements HandlerInterceptor {

    private final UserServiceImpl userService;

    public AuthenticationMiddleware(UserServiceImpl userService) {
        this.userService = userService;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        String authorizationHeader = request.getHeader("Authorization");
        if (authorizationHeader == null || authorizationHeader.startsWith("Bearer ")) {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return false;
        }

        //Extraia o token JWT do cabeçalho
        String jwtToken = authorizationHeader.substring(7); //Remove o prefixo

        //Valide o token JWT
        if (!validateJwtToken(jwtToken)) {
            //Token JWT inválido
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return false;
        }

        //Token JWT válido, permite o acesso
        return true;

    }

    private boolean validateJwtToken(String jwtToken) {
        try {
            byte[] keyBytes = userService.generateHs256().getEncoded();
            Jwts.parser()
                    .setSigningKey(keyBytes)
                    .parseClaimsJws(jwtToken);

            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
