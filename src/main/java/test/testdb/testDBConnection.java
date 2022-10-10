package test.testdb;

import com.Constant;
import com.db.RESTOperation;
import com.db.Query;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class testDBConnection {
    public RESTOperation rest = null;
    public testDBConnection(){
        rest = RESTOperation.getInstance();
    }
//    @Before
//    public void setUp() {
//        DBConnection dbconnection = com.db.DBConnection.getDbObject();
//        Connection con = dbconnection.connectToDatabase(Constant.DataBaseName.Eco);
//    }

    public static void main(String[] args) throws SQLException {


//        rest.createProductTable(Constant.DataBase_UserTableName.DBProductdata);
//        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
//        Date date = new Date(System.currentTimeMillis());
//        String[] payload = {"mukilan", "password", String.valueOf(date), "mukilan@gmail.com", "xxx,yyy,zzz"
//                , "1234567890", "false", String.valueOf(timestamp), String.valueOf(timestamp), "false"};
//        rest.insert(Constant.DataBase_UserTableName.DBProductdata, payload);      //insert record


//        rest.view(Constant.DataBase_UserTableName.DBUserdata);      //view record


        //create table
//        new testCreateTable().createUserTable();
//        new testCreateTable().createCategory();
//        new testCreateTable().createUserHistory();
        new testCreateTable().createOrderDetail();

        //User -> customer
//        new testUserManipulation().finddata();
//        new testUserManipulation().findCartData();

        //vendor
//        new testVendorManipulation().addGlobalProductsData();
//        new testVendorManipulation().addCategory();
    }
}
class testCreateTable extends testDBConnection{
    public void createUserTable(){
        rest.createUserTable(Constant.DataBase_UserTableName.DBUserdata);    //table create
    }

    public void createCategory(){
        rest.createTable(Query.CreateCategoryTable(Constant.DataBase_UserTableName.Categorydata));
    }

    public void createUserHistory() throws SQLException {
        String user_id = String.valueOf(2);
        String tablename = "orderhistory"+user_id;
        if(rest.checkTable(tablename)) {
            rest.createTable(Query.CreateUserHistoryTable(tablename));
        }
        else{
            System.out.println("already existed");
        }
    }
    public void createOrderDetail() throws SQLException {
        String tablename = Constant.DataBase_UserTableName.OrderDetail;
        if(rest.checkTable(tablename)) {
            rest.createTable(Query.CreateOrderDetail(tablename));
        }
        else{
            System.out.println("already existed");
        }
    }
}

class testUserManipulation extends testDBConnection{
    public void finddata(){
        Map<String, String> payload = new HashMap<String, String>();
        payload.put(Constant.Usersdata.email, "mukilan@gmail.com");
        payload.put(Constant.Usersdata.password, "1234");

        List<String> list = new ArrayList<String>();
        String condition = " "+ Constant.Usersdata.email +" = '"+ payload.get(Constant.Usersdata.email) +"';";
        ResultSet resultdata = null;      //view record
        try {
            resultdata = rest.executeQuery(Query.find(Constant.DataBase_UserTableName.DBUserdata, condition));
        } catch (SQLException e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
        try {
            while(resultdata.next()){
                list.add(resultdata.getString(Constant.Usersdata.userid));
                list.add(resultdata.getString(Constant.Usersdata.name));
                list.add(resultdata.getString(Constant.Usersdata.email));
                list.add(resultdata.getString(Constant.Usersdata.password));
                list.add(resultdata.getString(Constant.Usersdata.isadmin));
            }
        }catch (Exception e){
            e.printStackTrace();
            System.out.println(e);
        }
        if (list.size() > 0 && (list.get(2).equals(payload.get(Constant.Usersdata.email))
                && list.get(3).equals(payload.get(Constant.Usersdata.password)))) {
            System.out.println("same");
            for (String i : list)
                System.out.println(i);
        }
    }

    public void findCartData() {
        String tablename = "orderhistory2";
        String stage = Constant.CustomerStage.cart;
        String condition = " "+ Constant.UserHistory.stage +" = '"+ stage +"';";
        ResultSet resultdata = rest.executeQuery(Query.findcart(Constant.DataBase_UserTableName.DBProductdata, tablename,
                condition));
        JSONArray categoryslist = new JSONArray();
        try {
            while(resultdata.next()){
                JSONObject categorydetails =new JSONObject();
                categorydetails.put(Constant.OrderDetail.productid,
                        resultdata.getString(Constant.OrderDetail.productid));
                categorydetails.put(Constant.OrderDetail.vendorid,
                        resultdata.getString(Constant.OrderDetail.vendorid));
                categorydetails.put(Constant.DataBase_Gobal_Products.product_name,
                        resultdata.getString(Constant.DataBase_Gobal_Products.product_name));
                categorydetails.put(Constant.DataBase_Gobal_Products.brand_name,
                        resultdata.getString(Constant.DataBase_Gobal_Products.brand_name));
                categorydetails.put(Constant.DataBase_Gobal_Products.color,
                        resultdata.getString(Constant.DataBase_Gobal_Products.color));
                categorydetails.put(Constant.DataBase_Gobal_Products.size,
                        resultdata.getString(Constant.DataBase_Gobal_Products.size));
                categorydetails.put(Constant.OrderDetail.quantity,
                        resultdata.getString(Constant.OrderDetail.quantity));
                categorydetails.put(Constant.DataBase_Gobal_Products.price,
                        resultdata.getString(Constant.DataBase_Gobal_Products.price));
                categoryslist.add(categorydetails);
            }
        }catch (Exception e){
            e.printStackTrace();
            System.out.println(e);
        }
        System.out.println(categoryslist.toString());
        for(Object i : categoryslist){
            System.out.println(i);
        }
    }
}
class testVendorManipulation extends testDBConnection{
    public void addGlobalProductsData(){
        Map<String, String> payload = new HashMap<String, String>();
        payload.put("vendorid", "1");
        payload.put("categoryname", "categoryname");
        payload.put("type", "type");
        payload.put("brandname","brandname");
        payload.put("productname","productname");
        payload.put("detail", "detail");
        payload.put("size", "10");
        payload.put("color", "color");
        payload.put("price", "1499");
        payload.put("quantity", "90");
        try {
            rest.executeUpdate(Query.queryAddProduct(Constant.DataBase_UserTableName.DBProductdata,"1", payload));
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public void addCategory(){
        String payload = "categoryname";
        try {
            rest.executeUpdate(Query.queryAddCategory(Constant.DataBase_UserTableName.Categorydata, payload));
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
