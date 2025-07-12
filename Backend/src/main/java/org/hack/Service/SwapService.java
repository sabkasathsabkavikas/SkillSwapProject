package org.hack.Service;

import org.hack.Dao.SwapDao;
import org.hack.Model.SwapRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SwapService {

    @Autowired
    private SwapDao swapDao;

    public int sendSwapRequest(SwapRequest request) {
        return swapDao.sendSwapRequest(request);
    }

    public int updateSwapStatus(int id, String status) {
        return swapDao.updateSwapStatus(id, status);
    }

    public List<SwapRequest> getSwapsForUser(int userId) {
        return swapDao.getSwapsForUser(userId);
    }
}
