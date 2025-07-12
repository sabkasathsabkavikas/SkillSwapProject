package org.hack.Service;

import org.hack.Dao.NotificationDao;
import org.hack.Model.Notification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotificationService {

    @Autowired
    private NotificationDao notificationDao;

    public List<Notification> getNotificationsByUser(int userId) {
        return notificationDao.getNotificationsByUser(userId);
    }

    public int markAsRead(int id) {
        return notificationDao.markAsRead(id);
    }

    public int sendNotification(Notification notification) {
        return notificationDao.sendNotification(notification);
    }
}
