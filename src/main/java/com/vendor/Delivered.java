package com.vendor;

import com.Constant;
import com.db.Query;
import com.db.RESTOperation;
import com.util.ResultSettoJSON;
import org.json.simple.JSONArray;

import java.sql.ResultSet;
import java.sql.SQLException;

public class Delivered implements Strategy{
    private static RESTOperation rest = null;
    public Delivered(){
        rest = RESTOperation.getInstance();
    }
    public JSONArray getProduct(String product_tablename, String deliver_tablename, String stage, String value) throws SQLException {
        String condition = " "+ stage +" = '"+ value +"';";
        ResultSet resultdata = rest.executeQuery(Query.findcart(product_tablename, deliver_tablename, condition));
        return new ResultSettoJSON().ProductTable(resultdata, value);
    }
}
