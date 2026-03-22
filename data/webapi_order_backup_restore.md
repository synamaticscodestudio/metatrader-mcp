# Restore from Backup (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Trading ](webapi_trading.md "Trading") / [ Orders ](webapi_orders.md "Orders")/ Restore from Backup | [](webapi_order_backup_get.md "Get Orders from Backup") [](webapi_order_reopen.md "Reopen Order") |
| --- | --- | --- |
| --- | --- |

Restore Order from Archive
The request allows restoring orders from backup databases.
Request Format
POST /api/order/backup/restore { Order description in JSON format }  
---  
Response Format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server POST /api/order/backup/restore { "Order" : "12832917", "ExternalID" : "", "Login" : "104366", ... } //--- server response { "retcode" : "0 Done", "answer" : {  "Order" : "12832917", "ExternalID" : "", "Login" : "104366", ... } }  
---  
Request Parameters
The request has no parameters. The description of the order to be restored is passed in JSON format as an additional body. To receive an order description from the backup, use the [/api/order/backup/get](webapi_order_backup_get.md "Get Orders from Backup") request.
Response Parameters
  * retcode — if successful, the command returns [the response code ](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — recovered order parameters in JSON format. The full description of order parameters is available under the [Data Structure](webapi_order_data_structure.md "Data Structure") section.

Note
Restored orders are not deleted from the backup.