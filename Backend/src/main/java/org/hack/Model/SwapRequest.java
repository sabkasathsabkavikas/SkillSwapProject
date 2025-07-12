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
public class SwapRequest {
    private int id;
    private int requesterId;         // User who sent the request
    private int receiverId;          // User who received it
    private String message;          // Custom message (optional)
    private String status;           // "PENDING", "ACCEPTED", "REJECTED", "DELETED"
    private Timestamp createdAt;
}
