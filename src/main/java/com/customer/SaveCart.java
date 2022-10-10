package com.customer;

import com.Constant;
import com.base.BaseClass;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.sql.SQLException;
import java.util.Map;

@WebServlet("/save/cart")
public class SaveCart extends HttpServlet {
    private String getUserID(HttpServletRequest req) {
        HttpSession session = req.getSession(false);
        return String.valueOf(session.getAttribute(Constant.Usersdata.userid));
    }
    private String getTableName(HttpServletRequest req){
        return "orderhistory" + getUserID(req);
    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        Map<String, String> payload = new BaseClass().getPayload(request);
//        BufferedReader br = new BufferedReader(new InputStreamReader(request.getInputStream()));
//        String payload = br.readLine();

        String tablename = getTableName(request);

        HttpSession session = request.getSession(false);
        try {
            new CustomerService(session).updatecartquantity(tablename,payload);
        } catch (SQLException e) {
            response.sendError(401, "SQL Error");
            e.printStackTrace();
            throw new RuntimeException(e);
        } catch (SessionException e) {
            response.sendError(401, "Unauthorized");
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }
}
