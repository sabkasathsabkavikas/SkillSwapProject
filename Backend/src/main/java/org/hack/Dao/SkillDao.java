package org.hack.Dao;

import org.hack.Model.Skill;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class SkillDao {

    @Autowired
    private JdbcTemplate jdbcTemplate2;

    public int addSkill(Skill skill) {
        String sql = "INSERT INTO skills(user_id, skill_name, type) VALUES (?, ?, ?)";
        return jdbcTemplate2.update(sql, skill.getUserId(), skill.getSkillName(), skill.getType());
    }

    public List<Skill> getSkillsByUser(int userId) {
        String sql = "SELECT * FROM skills WHERE user_id = ?";
        return jdbcTemplate2.query(sql, new BeanPropertyRowMapper<>(Skill.class), userId);
    }

    public List<Skill> searchSkills(String keyword) {
        String sql = "SELECT * FROM skills WHERE skill_name LIKE ?";
        return jdbcTemplate2.query(sql, new BeanPropertyRowMapper<>(Skill.class), "%" + keyword + "%");
    }
}
