package com.emsi.billingservice;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class ConsulConfigRestController {
    private final MyConsulConfig myConsulConfig;

    @GetMapping(path = "/myConfig")
    public MyConsulConfig myConfig() {
        return myConsulConfig;
    }
}
