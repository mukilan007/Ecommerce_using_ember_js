package com.mickey.curdoperation;

import com.Constant;
import com.adventnet.ds.query.*;

import com.adventnet.persistence.*;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import static com.sun.xml.internal.ws.spi.db.BindingContextFactory.LOGGER;


public class FindQuery {
    public static void insert() throws SQLException, DataAccessException {
        Row r = new Row (Constant.DataBase_UserTableName.DBUserdata);
        r.set(Constant.Usersdata.name, "xxx");
        r.set(Constant.Usersdata.password, "xxx");
        r.set(Constant.Usersdata.dateofbirth, "xxx");
        r.set(Constant.Usersdata.email, "xxx@gmail.com");
        r.set(Constant.Usersdata.address, "xxx");
        r.set(Constant.Usersdata.phone, "123456789");
        r.set(Constant.Usersdata.isadmin, "true");
        r.set(Constant.Usersdata.createdat, "2022-10-01 00:19:12.705");
        r.set(Constant.Usersdata.lastcheckin, "2022-10-01 00:19:12.705");
        r.set(Constant.Usersdata.isdeleted, "false");

        DataObject d=new WritableDataObject();
        d.addRow(r);

        DataAccess.add(d);
    }

    public static void update(String table_name,String column_name, Map<String, String> payload) throws DataAccessException {
        Criteria c = new Criteria(new Column(table_name, column_name), payload.get(Constant.Usersdata.email)
                , QueryConstants.EQUAL);
        DataObject dataObject = DataAccess.get(table_name, c);
        if (!dataObject.isEmpty()) {
            Iterator itr = dataObject.getRows(table_name);
            while (itr.hasNext()) {
                Row row = (Row) itr.next();
                String tabName = (String) row.get("column name");
                row.set("column name","value");
                dataObject.updateRow(row);
            }
            DataAccess.update(dataObject);
        }
    }

    public static void find(String table_name,String column_name, Map<String, String> payload) throws DataAccessException {

        Criteria c1 = new Criteria(new Column(table_name, column_name), payload.get(Constant.Usersdata.email)
                , QueryConstants.EQUAL);        //find

        Criteria c2 = new Criteria(new Column(table_name, column_name), null,
                QueryConstants.EQUAL);          //findall

        Criteria c3 = new Criteria(new Column(table_name, column_name), payload.get(Constant.Usersdata.email)
                , QueryConstants.EQUAL);
        c3 = c3.and(new Criteria(Column.getColumn(table_name, column_name), payload.get(Constant.Usersdata.password),
                QueryConstants.EQUAL));         //find with many condition

        DataObject dataObject = DataAccess.get(table_name, c1);
        if (!dataObject.isEmpty()) {
            Iterator itr = dataObject.getRows(table_name);
            while (itr.hasNext()) {
                Row row = (Row) itr.next();
                String tabName = (String) row.get(Constant.AllCategory.categoryname);
                LOGGER.info("Existing row taken from DB : "+row);
                LOGGER.info("Existing row category name taken from DB : "+tabName);
            }
        }
    }

    public static void findall(String table_name) throws DataAccessException {
//        String find = "select * from " + table_name;

        SelectQuery selectQuery = QueryConstructor.get(table_name,  "*");
        DataObject dataObject = DataAccess.get(selectQuery);
        if (!dataObject.isEmpty()) {
            Iterator itr = dataObject.getRows(table_name);
            while (itr.hasNext()) {
                Row row = (Row) itr.next();
                String tabName = (String) row.get(Constant.AllCategory.categoryname);
                LOGGER.info("Existing row taken from DB : "+row);
                LOGGER.info("Existing row category name taken from DB : "+tabName);
            }
        }

        SelectQuery query = new SelectQueryImpl(Table.getTable(table_name));
        query.addSelectColumn(Column.getColumn(table_name, "*"));
    }

    public static void main(String[] args) throws SQLException, DataAccessException {



        insert();
        Map<String, String> map = new HashMap<String, String>();
        update("a","b",map);
    }
}
