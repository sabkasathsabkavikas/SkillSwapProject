package org.hack.Dao;

import org.hack.Model.Notification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class NotificationDao {

    @Autowired
    private JdbcTemplate jdbcTemplate2;

    public int sendNotification(Notification notification) {
        String sql = "INSERT INTO notifications(user_id, message, is_read) VALUES (?, ?, ?)";
        return jdbcTemplate2.update(sql,
                notification.getUserId(),
                notification.getMessage(),
                notification.isRead());
    }

    public List<Notification> getNotificationsByUser(int userId) {
        String sql = "SELECT * FROM notifications WHERE user_id = ? ORDER BY created_at DESC";
        return jdbcTemplate2.query(sql, new BeanPropertyRowMapper<>(Notification.class), userId);
    }

    public int markAsRead(int id) {
        String sql = "UPDATE notifications SET is_read = TRUE WHERE id = ?";
        return jdbcTemplate2.update(sql, id);
    }
}
