package org.hack.Service;

import org.hack.Dao.SkillDao;
import org.hack.Model.Skill;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SkillService {

    @Autowired
    private SkillDao skillDao;

    public int addSkill(Skill skill) {
        return skillDao.addSkill(skill);
    }

    public List<Skill> getSkillsByUser(int userId) {
        return skillDao.getSkillsByUser(userId);
    }

    public List<Skill> searchSkills(String keyword) {
        return skillDao.searchSkills(keyword);
    }
}
