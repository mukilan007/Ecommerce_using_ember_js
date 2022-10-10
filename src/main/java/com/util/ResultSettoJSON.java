package com.util;

import com.Constant;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ResultSettoJSON {
    public JSONArray ProductTable(ResultSet resultdata, String type) throws SQLException {
        JSONArray productjson = new JSONArray();
        while(resultdata.next()){
            JSONObject productdetails =new JSONObject();
            if(type.equals(Constant.VendorStage.ordered)) {
                productdetails.put(Constant.OrderDetail.id,
                        resultdata.getString(Constant.OrderDetail.id));
            }
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
            productdetails.put(Constant.OrderDetail.quantity,
                    resultdata.getString(Constant.OrderDetail.quantity));
            productdetails.put(Constant.DataBase_Gobal_Products.price,
                    resultdata.getString(Constant.DataBase_Gobal_Products.price));
            productjson.add(productdetails);
        }
        return productjson;
    }
    public JSONArray TableListOfCategory(ResultSet resultdata) throws SQLException {
        JSONArray categoryslist = new JSONArray();
        while(resultdata.next()){
            JSONObject categorydetails =new JSONObject();
            categorydetails.put(Constant.AllCategory.categoryid,
                    resultdata.getString(Constant.AllCategory.categoryid));
            categorydetails.put(Constant.AllCategory.categoryname,
                    resultdata.getString(Constant.AllCategory.categoryname));
            categoryslist.add(categorydetails);
        }
        return categoryslist;
    }
}
