package org.hack.Controller;

import org.hack.Model.SwapRequest;
import org.hack.Service.SwapService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/swaps")
@CrossOrigin("*")
public class SwapController {

    @Autowired
    private SwapService swapService;

    @PostMapping("/send")
    public String sendSwapRequest(@RequestBody SwapRequest request) {
        return swapService.sendSwapRequest(request) > 0 ? "Request sent" : "Error";
    }

    @PutMapping("/update/{id}")
    public String updateSwapStatus(@PathVariable int id, @RequestParam String status) {
        return swapService.updateSwapStatus(id, status) > 0 ? "Updated" : "Error";
    }

    @GetMapping("/user/{userId}")
    public List<SwapRequest> getSwapsForUser(@PathVariable int userId) {
        return swapService.getSwapsForUser(userId);
    }
}
