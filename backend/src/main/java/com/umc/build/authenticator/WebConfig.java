package com.umc.build.authenticator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    private final AuthenticationMiddleware authenticationMiddleware;

    @Autowired
    public WebConfig(AuthenticationMiddleware authenticationMiddleware) {
        this.authenticationMiddleware = authenticationMiddleware;
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(authenticationMiddleware).addPathPatterns("/dashboard");
    }
}
