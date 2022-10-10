package com.util;

import com.Constant;
import com.db.Query;
import com.db.RESTOperation;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class Validation {
    private static RESTOperation rest = null;
    private String categoryname;
    public Validation(){
        rest = RESTOperation.getInstance();
    }

    public void setCategoryname(String categoryname) {
        this.categoryname = categoryname;
    }

    public void checkCategory() throws SQLException {
        List<String> list = new ArrayList<String>();
        String condition = " "+ Constant.AllCategory.categoryname +" = LOWER('"+ categoryname +"');";
        ResultSet resultdata = rest.executeQuery(Query.find(Constant.DataBase_UserTableName.Categorydata, condition));
        try {
            while(resultdata.next()){
                list.add(resultdata.getString(Constant.AllCategory.categoryname));
            }
        }catch (Exception e){
            e.printStackTrace();
            System.out.println(e);
        }
        if (list.size() == 0)
            rest.executeUpdate(Query.queryAddCategory(Constant.DataBase_UserTableName.Categorydata, categoryname));
    }

}
