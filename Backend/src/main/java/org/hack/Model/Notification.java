package org.hack.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.sql.Timestamp;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Notification {
    private int id;
    private int userId;              // Who receives the notification
    private String message;          // e.g., "You got a swap request"
    private boolean isRead;          // true if read
    private Timestamp createdAt;
}
