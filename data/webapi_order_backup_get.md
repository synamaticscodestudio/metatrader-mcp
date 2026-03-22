# Get Orders from Backup (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Trading ](webapi_trading.md "Trading") / [ Orders ](webapi_orders.md "Orders")/ Get Orders from Backup | [](webapi_order_backup_list.md "Get Backups List") [](webapi_order_backup_restore.md "Restore from Backup") |
| --- | --- | --- |
| --- | --- |

Get Orders from Backup
The request allows receiving information about one or more orders from a specific backup on the server.
Request Format
GET /api/order/backup/get?backup=date&login=login&ticket=ticket&from=beginning&to=end&server=identifier POST /api/order/backup/get?backup=date&login=login&ticket=ticket&from=beginning&to=end&server=identifier  
---  
Response Format
{ "retcode" : "code description", "answer" : [ description of orders ] }  
---  
Example
//--- request to the server GET /api/order/backup/get?backup=1574122620&login=104366 //--- server response { "retcode" : "0 Done", "answer" : [ {  "Order" : "12832917", "ExternalID" : "", "Login" : "104366", ... }, {  "Order" : "12832918", "ExternalID" : "", "Login" : "104366", ... }, ... ] }  
---  
Request Parameters
  * backup — backup copy date. To get the list of available backups, use the [/api/order/backup/list](webapi_order_backup_list.md "Get Backups List") request.
  * server — identifier of the backup server from which the order is requested. Optional parameter. If not specified, data will be requested from the first backup server in the list.
  * login — the login of the user whose orders should be retrieved from the backup database. The parameter is required if the order ticket is not specified in the request.
  * ticket — the ticket of the order which you want to obtain from the backup database.
  * from — the beginning of the period for requesting orders. The date is specified in seconds elapsed since 01.01.1970. Th-s parameter cannot be used together with the 'ticket' parameter.
  * from — the end of the period for requesting orders. The date is specified in seconds elapsed since 01.01.1970. Th-s parameter cannot be used together with the 'ticket' parameter.

Response Parameters
  * retcode — if successful, the command returns [the response code ](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — order parameters in JSON format. The full description of passed order parameters is available under the ["Data structure"](webapi_order_data_structure.md "Data Structure") section.
