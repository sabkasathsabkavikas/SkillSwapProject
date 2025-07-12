package org.hack.Controller;

import org.hack.Model.Notification;
import org.hack.Service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notifications")
@CrossOrigin("*")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;

    @GetMapping("/{userId}")
    public List<Notification> getNotifications(@PathVariable int userId) {
        return notificationService.getNotificationsByUser(userId);
    }

    @PutMapping("/mark-read/{id}")
    public String markAsRead(@PathVariable int id) {
        return notificationService.markAsRead(id) > 0 ? "Marked as read" : "Failed";
    }
}
