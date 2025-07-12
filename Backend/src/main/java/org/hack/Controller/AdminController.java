package org.hack.Controller;

import org.hack.Model.Admin;
import org.hack.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "*")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Admin admin) {
        Admin loggedInAdmin = adminService.login(admin.getUsername(), admin.getPassword());
        return loggedInAdmin != null
                ? ResponseEntity.ok(loggedInAdmin)
                : ResponseEntity.status(401).body("Invalid credentials");
    }
}
