package org.hack.Dao;

import org.hack.Model.SwapRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class SwapDao {

    @Autowired
    private JdbcTemplate jdbcTemplate2;

    public int sendSwapRequest(SwapRequest request) {
        String sql = "INSERT INTO swap_requests(requester_id, receiver_id, message, status) VALUES (?, ?, ?, ?)";
        return jdbcTemplate2.update(sql,
                request.getRequesterId(),
                request.getReceiverId(),
                request.getMessage(),
                request.getStatus());
    }

    public int updateSwapStatus(int id, String status) {
        String sql = "UPDATE swap_requests SET status = ? WHERE id = ?";
        return jdbcTemplate2.update(sql, status, id);
    }

    public List<SwapRequest> getSwapsForUser(int userId) {
        String sql = "SELECT * FROM swap_requests WHERE requester_id = ? OR receiver_id = ?";
        return jdbcTemplate2.query(sql, new BeanPropertyRowMapper<>(SwapRequest.class), userId, userId);
    }
}
