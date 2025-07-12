package org.hack.Dao;

import org.hack.Model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserDao {

    @Autowired
    private JdbcTemplate jdbcTemplate2;

    public int register(User user) {
        String sql = "INSERT INTO users(username, userPassword, age, longDiscription, shotDescription) VALUES (?, ?, ?, ?, ?)";
        return jdbcTemplate2.update(sql,
                user.getUsername(),
                user.getUserPassword(),
                user.getAge(),
                user.getLongDiscription(),
                user.getShotDescription());
    }

    public User login(String username, String password) {
        try {
            String sql = "SELECT * FROM users WHERE username = ? AND userPassword = ?";
            return jdbcTemplate2.queryForObject(sql, new BeanPropertyRowMapper<>(User.class), username, password);
        } catch (Exception e) {
            return null;
        }
    }

    public List<User> getAll() {
        return jdbcTemplate2.query("SELECT * FROM users", new BeanPropertyRowMapper<>(User.class));
    }

    public User getUserById(int id) {
        return jdbcTemplate2.queryForObject("SELECT * FROM users WHERE id = ?", new BeanPropertyRowMapper<>(User.class), id);
    }
}
