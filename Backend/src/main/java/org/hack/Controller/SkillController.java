package org.hack.Controller;

import org.hack.Model.Skill;
import org.hack.Service.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/skills")
@CrossOrigin("*")
public class SkillController {

    @Autowired
    private SkillService skillService;

    @PostMapping("/add")
    public String addSkill(@RequestBody Skill skill) {
        return skillService.addSkill(skill) > 0 ? "Skill added" : "Error";
    }

    @GetMapping("/{userId}")
    public List<Skill> getSkillsByUser(@PathVariable int userId) {
        return skillService.getSkillsByUser(userId);
    }

    @GetMapping("/search")
    public List<Skill> searchSkills(@RequestParam String keyword) {
        return skillService.searchSkills(keyword);
    }
}
