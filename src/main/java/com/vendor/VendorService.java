package com.vendor;

import com.Constant;
import com.customer.SessionException;
import com.db.Query;
import com.db.RESTOperation;
import com.util.*;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import javax.servlet.http.HttpSession;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Map;

public class VendorService {
    private static RESTOperation rest = null;
    private VendorService(){}
    public VendorService(HttpSession session) throws SessionException {
        sessionvalidate(session);
        rest = RESTOperation.getInstance();
    }
    private void sessionvalidate(HttpSession session) throws SessionException {
        if(session != null) {
            String type = (String) session.getAttribute(Constant.Usersdata.isadmin);
            if (type.equals("f")) {
                throw new SessionException("Unauthorized");
            }
        }
    }

    public JSONArray getAllCategory(String userid) throws SQLException {
        String condition = " "+ Constant.DataBase_Gobal_Products.vendorid +" = '"+ userid +"';";
        ResultSet resultdata = rest.executeQuery(Query.find(Constant.DataBase_UserTableName.DBProductdata, condition));
        JSONArray categoryslist = new JSONArray();
        while(resultdata.next()){
            JSONObject categorydetails =new JSONObject();
            categorydetails.put(Constant.DataBase_Gobal_Products.categoryname,
                    resultdata.getString(Constant.DataBase_Gobal_Products.categoryname));
            categoryslist.add(categorydetails);
        }
        return categoryslist;
    }
    public JSONArray getCategory(String userid) throws SQLException {
        String condition = " "+ Constant.DataBase_Gobal_Products.vendorid +" = '"+ userid +"';";
        ResultSet resultdata = rest.executeQuery(Query.find(Constant.DataBase_UserTableName.DBProductdata, condition));
        JSONArray productjson = new JSONArray();
        while(resultdata.next()){
            JSONObject productdetails =new JSONObject();
            productdetails.put(Constant.OrderDetail.productid,
                    resultdata.getString(Constant.OrderDetail.productid));
            productdetails.put(Constant.OrderDetail.vendorid,
                    resultdata.getString(Constant.OrderDetail.vendorid));
            productdetails.put(Constant.DataBase_Gobal_Products.product_name,
                    resultdata.getString(Constant.DataBase_Gobal_Products.product_name));
            productdetails.put(Constant.DataBase_Gobal_Products.brand_name,
                    resultdata.getString(Constant.DataBase_Gobal_Products.brand_name));
            productdetails.put(Constant.DataBase_Gobal_Products.color,
                    resultdata.getString(Constant.DataBase_Gobal_Products.color));
            productdetails.put(Constant.DataBase_Gobal_Products.size,
                    resultdata.getString(Constant.DataBase_Gobal_Products.size));
            productdetails.put(Constant.DataBase_Gobal_Products.quantity,
                    resultdata.getString(Constant.DataBase_Gobal_Products.quantity));
            productdetails.put(Constant.DataBase_Gobal_Products.price,
                    resultdata.getString(Constant.DataBase_Gobal_Products.price));
            productjson.add(productdetails);
        }
        return productjson;
    }
    public void addProduct(String userid, Map<String, String> payload) throws SQLException {
        Validation validation = new Validation();
        validation.setCategoryname(payload.get("categoryname"));         //TODO: change categoryname
        validation.checkCategory();

        rest.executeUpdate(Query.queryAddProduct(Constant.DataBase_UserTableName.DBProductdata,
                userid,payload));
    }

    public void deleteOrder(String orderid) throws SQLException {
        String order_tablename = Constant.DataBase_UserTableName.OrderDetail;
        rest.executeUpdate(Query.delete(order_tablename,Constant.OrderDetail.id,orderid));
    }

    public void updateDelivery(String history_tablename, String value) throws SQLException {
        String order_tablename = Constant.DataBase_UserTableName.OrderDetail;
        String condition = " "+ Constant.OrderDetail.id +" = '"+ value +"';";
        Accountmanagement accountmanagement = new Accountmanagement();
        String completedAt = String.valueOf(accountmanagement.getTimeNow());
        String stage = Constant.VendorStage.delivered;

        ResultSet resultdata = rest.executeQuery(Query.find(order_tablename, condition));
        rest.executeUpdate(Query.queryAddOrder_history(history_tablename, resultdata, completedAt, stage));
        deleteOrder(value);

    }
    public void deleteProduct(String orderid) throws SQLException {
        String product_tablename = Constant.DataBase_UserTableName.DBProductdata;
        rest.executeUpdate(Query.delete(product_tablename,Constant.DataBase_Gobal_Products.productid,orderid));
    }

//    public JSONArray getProduct(String product_tablename, String order_tablename, String stage, String userid) throws SQLException {
//        String condition = " "+ Constant.UserHistory.stage +" = '"+ stage +"' " +
//                " and "+ order_tablename+"."+ Constant.UserHistory.vendorid +" = '"+ userid +"';";
//        ResultSet resultdata = rest.executeQuery(Query.findcart(product_tablename, order_tablename, condition));
//        return new ResultSettoJSON().ProductTable(resultdata);
//    }

//    public JSONArray getDelivered(String product_tablename, String delivered_tablename, String stagename, String stage) throws SQLException {
//        String condition = " "+ stagename +" = '"+ stage +"';";
//        ResultSet resultdata = rest.executeQuery(Query.find(delivered_tablename, condition));
//        return new ResultSettoJSON().ProductTable(resultdata);
//    }
}
