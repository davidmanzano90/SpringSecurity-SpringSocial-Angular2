package com.filmouk.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.web.cors.CorsConfiguration;

import javax.validation.constraints.NotNull;

@ConfigurationProperties(prefix = "filmouk", ignoreUnknownFields = false)
public class AppProperties {

    private final Async async = new Async();

    private final Mail mail = new Mail();

    private final Security security = new Security();

    private final CorsConfiguration cors = new CorsConfiguration();

    private final Social social = new Social();

    public Async getAsync() {
        return async;
    }

    public Mail getMail() {
        return mail;
    }

    public Security getSecurity() {
        return security;
    }

    public CorsConfiguration getCors() {
        return cors;
    }

    public Social getSocial() {
        return social;
    }

    public static class Async {

        private int corePoolSize = 2;

        private int maxPoolSize = 50;

        private int queueCapacity = 10000;

        public int getCorePoolSize() {
            return corePoolSize;
        }

        public void setCorePoolSize(int corePoolSize) {
            this.corePoolSize = corePoolSize;
        }

        public int getMaxPoolSize() {
            return maxPoolSize;
        }

        public void setMaxPoolSize(int maxPoolSize) {
            this.maxPoolSize = maxPoolSize;
        }

        public int getQueueCapacity() {
            return queueCapacity;
        }

        public void setQueueCapacity(int queueCapacity) {
            this.queueCapacity = queueCapacity;
        }
    }

    public static class Mail {

        private String from = "angular2security@localhost";

        private String baseUrl = "";

        public String getFrom() {
            return from;
        }

        public void setFrom(String from) {
            this.from = from;
        }

        public String getBaseUrl() {
            return baseUrl;
        }

        public void setBaseUrl(String baseUrl) {
            this.baseUrl = baseUrl;
        }
    }

    public static class Security {

        private final RememberMe rememberMe = new RememberMe();

        public RememberMe getRememberMe() {
            return rememberMe;
        }

        public static class RememberMe {

            @NotNull
            private String key;

            public String getKey() {
                return key;
            }

            public void setKey(String key) {
                this.key = key;
            }
        }
    }

    public static class Social {

        private String redirectAfterSignIn = "/#/home";

        public String getRedirectAfterSignIn() {
            return redirectAfterSignIn;
        }

        public void setRedirectAfterSignIn(String redirectAfterSignIn) {
            this.redirectAfterSignIn = redirectAfterSignIn;
        }
    }
}
