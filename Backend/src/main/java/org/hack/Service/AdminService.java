package org.hack.Service;

import org.hack.Dao.AdminDao;
import org.hack.Model.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    @Autowired
    private AdminDao adminDao;

    public Admin login(String username, String password) {
        return adminDao.login(username, password);
    }
}
