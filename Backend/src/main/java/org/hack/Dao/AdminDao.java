package org.hack.Dao;

import org.hack.Model.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class AdminDao {

    @Autowired
    private JdbcTemplate jdbcTemplate1;

    public Admin login(String username, String password) {
        String sql = "SELECT * FROM admin WHERE username=? AND password=?";
        try {
            return jdbcTemplate1.queryForObject(
                    sql,
                    new Object[]{username, password},
                    new BeanPropertyRowMapper<>(Admin.class));
        } catch (Exception e) {
            return null;
        }
    }
}
