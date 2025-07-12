package org.hack.Service;

import org.hack.Dao.UserDao;
import org.hack.Model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserDao userDao;

    public int register(User user) {
        return userDao.register(user);
    }

    public User login(String username, String password) {
        return userDao.login(username, password);
    }

    public List<User> getAll() {
        return userDao.getAll();
    }

    public User getUserById(int id) {
        return userDao.getUserById(id);
    }
}
