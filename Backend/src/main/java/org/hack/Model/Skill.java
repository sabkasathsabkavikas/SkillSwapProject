package org.hack.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Skill {
    private int id;                  // Skill ID
    private int userId;              // Linked user ID
    private String skillName;        // e.g., "Java", "Photoshop"
    private String type;             // "OFFERED" or "WANTED"
}
