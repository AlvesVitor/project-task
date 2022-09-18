package com.taskserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableTransactionManagement
public class TaskServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(TaskServerApplication.class, args);
    }

}
