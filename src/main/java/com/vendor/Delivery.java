package com.vendor;

import com.Constant;
import com.db.Query;
import com.db.RESTOperation;
import com.util.ResultSettoJSON;
import org.json.simple.JSONArray;

import java.sql.ResultSet;
import java.sql.SQLException;

public class Delivery implements Strategy{
    private static RESTOperation rest = null;
    public Delivery(){
        rest = RESTOperation.getInstance();
    }
    public JSONArray getProduct(String product_tablename, String deliver_tablename, String stage, String value) throws SQLException {
        String condition = " "+ Constant.UserHistory.stage +" = '"+ stage +"'" +
                " and "+ deliver_tablename+"."+ Constant.UserHistory.vendorid +" = '"+ value +"';";
        ResultSet resultdata = rest.executeQuery(Query.findorder(product_tablename, deliver_tablename, condition));
        return new ResultSettoJSON().ProductTable(resultdata, stage);
    }
}
