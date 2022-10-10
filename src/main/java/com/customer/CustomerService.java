package com.customer;

import com.Constant;
import com.db.Query;
import com.db.RESTOperation;
import com.Iterator;
import com.notification.Emailnotification;
import com.notification.Notification;
import com.notification.SMSnotification;
import com.util.Accountmanagement;

import com.util.ResultSettoJSON;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import javax.servlet.http.HttpSession;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Map;

public class CustomerService{
    private RESTOperation rest = null;
    private CustomerService(){}
    public CustomerService(HttpSession session) throws SessionException {
        sessionvalidate(session);
        rest = RESTOperation.getInstance();
    }

    private void sessionvalidate(HttpSession session) throws SessionException {
        if(session != null) {
            String type = (String) session.getAttribute(Constant.Usersdata.isadmin);
            if (type.equals("t")) {
                throw new SessionException("Unauthorized");
            }
        }
    }

    //    public JSONArray getAllCategory(String table_name, getSpecificTable strInstance){
//        ResultSet resultdata = rest.find(Query.findall(table_name));
//        JSONArray categoryslist = strInstance.ResultSettoJSON(resultdata);
////        System.out.println(categoryslist.toString());
//        return categoryslist;
//      }
    public JSONArray getAllCategory() throws SQLException {
        ResultSet resultdata = rest.executeQuery(Query.findall(Constant.DataBase_UserTableName.Categorydata));
        return new ResultSettoJSON().TableListOfCategory(resultdata);
    }


    public JSONArray findproduct(Map<String, String> payload) throws SQLException {
        String condition = " "+ Constant.DataBase_Gobal_Products.categoryname +" = '"+
                payload.get(Constant.AllCategory.categoryname) +"';";
        ResultSet resultdata = rest.executeQuery(Query.find(Constant.DataBase_UserTableName.DBProductdata, condition));
        JSONArray categoryslist = new JSONArray();
        while(resultdata.next()){
            JSONObject categorydetails =new JSONObject();
            categorydetails.put(Constant.DataBase_Gobal_Products.productid,
                    resultdata.getString(Constant.DataBase_Gobal_Products.productid));
            categorydetails.put(Constant.DataBase_Gobal_Products.vendorid,
                    resultdata.getString(Constant.DataBase_Gobal_Products.vendorid));
            categorydetails.put(Constant.DataBase_Gobal_Products.product_name,
                    resultdata.getString(Constant.DataBase_Gobal_Products.product_name));
            categorydetails.put(Constant.DataBase_Gobal_Products.categoryname,
                    resultdata.getString(Constant.DataBase_Gobal_Products.categoryname));
            categorydetails.put(Constant.DataBase_Gobal_Products.detail,
                    resultdata.getString(Constant.DataBase_Gobal_Products.detail));
            categorydetails.put(Constant.DataBase_Gobal_Products.quantity,
                    resultdata.getString(Constant.DataBase_Gobal_Products.quantity));
            categorydetails.put(Constant.DataBase_Gobal_Products.size,
                    resultdata.getString(Constant.DataBase_Gobal_Products.size));
            categorydetails.put(Constant.DataBase_Gobal_Products.color,
                    resultdata.getString(Constant.DataBase_Gobal_Products.color));
            categorydetails.put(Constant.DataBase_Gobal_Products.brand_name,
                    resultdata.getString(Constant.DataBase_Gobal_Products.brand_name));
            categorydetails.put(Constant.DataBase_Gobal_Products.price,
                    resultdata.getString(Constant.DataBase_Gobal_Products.price));
            categorydetails.put(Constant.DataBase_Gobal_Products.type,
                    resultdata.getString(Constant.DataBase_Gobal_Products.type));

            categoryslist.add(categorydetails);
        }
        return categoryslist;

    }
    public void checkUserHistoryTable(String tablename){
        if(rest.checkTable(tablename)) {
            rest.createTable(Query.CreateUserHistoryTable(tablename));
        }
    }
    public void addcart(String tablename, Map<String, String> payload) throws SQLException, CardExistException {
        String condition = " "+ Constant.UserHistory.productid +" = '"+ payload.get(Constant.UserHistory.productid) +"';";
        ResultSet resultdata = rest.executeQuery(Query.find(tablename, condition));
        if (!resultdata.next()) {
            checkUserHistoryTable(tablename);
            Accountmanagement accountmanagement = new Accountmanagement();
            payload.put(Constant.UserHistory.quantity, "1");
            payload.put(Constant.UserHistory.stage, Constant.CustomerStage.cart);
            payload.put(Constant.UserHistory.createdAt, String.valueOf(accountmanagement.getCreatedAt()));
            payload.put(Constant.UserHistory.completedAt, null);

            rest.executeUpdate(Query.queryAddCart(tablename, payload));
        }
        else {
            throw new CardExistException("cart already exist");
        }
    }
    public JSONArray findorder(String table_name1, String table_name2, String stage, String userid) throws SQLException {
        checkUserHistoryTable(table_name2);
        String condition =  " "+ Constant.UserHistory.stage +" = '"+ stage +"' and "+
                Constant.OrderDetail.customerid+" = '"+ userid +"';";
        ResultSet resultdata = rest.executeQuery(Query.findorder(table_name1, table_name2, condition));
        return new ResultSettoJSON().ProductTable(resultdata, stage);
    }
    public JSONArray findcard(String table_name1, String table_name2, String stage) throws SQLException {
        checkUserHistoryTable(table_name2);
        String condition = " "+ Constant.UserHistory.stage +" = '"+ stage +"';";
        return getcard(table_name1, table_name2, condition);
    }
    private JSONArray getcard(String table_name1, String table_name2, String condition) throws SQLException {
        ResultSet resultdata = rest.executeQuery(Query.findcart(table_name1, table_name2, condition));
        int size = 0;
        if (resultdata.last()) {
            size = resultdata.getRow();
            resultdata.beforeFirst();
        }
        JSONArray productjson = new JSONArray();
        Iterator<Integer> iterator = new Iterator<Integer>(size);
        int value = 0;
        while(resultdata.next()){
            JSONObject productdetails =new JSONObject();
//            productdetails.put(Constant.OrderDetail.id,
//                    resultdata.getString(Constant.OrderDetail.id));
            productdetails.put(Constant.UserHistory.productid,
                    resultdata.getString(Constant.UserHistory.productid));
            productdetails.put(Constant.UserHistory.vendorid,
                    resultdata.getString(Constant.UserHistory.vendorid));
            productdetails.put(Constant.DataBase_Gobal_Products.product_name,
                    resultdata.getString(Constant.DataBase_Gobal_Products.product_name));
            productdetails.put(Constant.DataBase_Gobal_Products.brand_name,
                    resultdata.getString(Constant.DataBase_Gobal_Products.brand_name));
            productdetails.put(Constant.DataBase_Gobal_Products.color,
                    resultdata.getString(Constant.DataBase_Gobal_Products.color));
            productdetails.put(Constant.DataBase_Gobal_Products.size,
                    resultdata.getString(Constant.DataBase_Gobal_Products.size));
            productdetails.put(Constant.UserHistory.quantity,
                    resultdata.getString(Constant.UserHistory.quantity));
            productdetails.put(Constant.DataBase_Gobal_Products.price,
                    resultdata.getString(Constant.DataBase_Gobal_Products.price));
            value = Integer.parseInt((String) productdetails.get(Constant.DataBase_Gobal_Products.quantity)) * Integer.parseInt((String) productdetails.get(Constant.DataBase_Gobal_Products.price));
            productdetails.put("totalprice", String.valueOf(value));
            iterator.add(value);
            productjson.add(productdetails);
        }
//        System.out.println(productjson.toString());
        Iterator<Integer>.InnerIterator iterator1 = iterator.getInstance();
        int totalamount = 0;
        while(iterator1.hasNext()) {
            totalamount = totalamount + iterator1.next();
        }
        productjson.add(totalamount);
        return productjson;
    }
    public void sendNotifcation(ResultSet resultdata) throws SQLException {
        Emailnotification emailnotification = new Emailnotification();
        SMSnotification smsnotification = new SMSnotification();

        Notification notification = new Notification(emailnotification, smsnotification);
        while(resultdata.next()){
            notification.add(resultdata.getString(Constant.UserHistory.productid),
                    resultdata.getString(Constant.UserHistory.vendorid));
        }
        notification.dataChange();
    }
    public void decreaseProduct(String cart_tablename, String order_tablename, ResultSet resultdata) throws SQLException {
        Query.updateorder(cart_tablename, order_tablename, resultdata);
    }
    public void updatecart(String cart_tablename, String order_tablename, String stage, String userid) throws SQLException{
        String condition = " "+ Constant.UserHistory.stage +" = '"+ Constant.CustomerStage.cart +"';";
        ResultSet resultdata = rest.executeQuery(Query.find(cart_tablename, condition));
        Query.queryAddOrder(order_tablename, userid, stage, resultdata);
        resultdata.beforeFirst();
//        decreaseProduct(cart_tablename, order_tablename, resultdata);
//        resultdata.beforeFirst();
        rest.executeUpdate(Query.delete(cart_tablename,
                Constant.UserHistory.stage,Constant.CustomerStage.cart));

        sendNotifcation(resultdata);
    }
    public void updatecartquantity(String tablename, Map<String, String> payload) throws SQLException{
        String condition = " " + Constant.UserHistory.productid + " = '" + payload.get(Constant.UserHistory.productid) + "';";
        String set = Constant.UserHistory.quantity + " = '" + payload.get(Constant.UserHistory.quantity);
        rest.executeUpdate(Query.update(tablename, set, condition));
    }
    public void deleteProduct(String tablename, String orderid) throws SQLException {
        rest.executeUpdate(Query.delete(tablename,Constant.UserHistory.productid,orderid));
    }
}
