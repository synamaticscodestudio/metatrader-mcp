# Get Backups List (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Trading ](webapi_trading.md "Trading") / [ Positions ](webapi_positions.md "Positions")/ Get Backups List | [](webapi_position_delete.md "Delete") [](webapi_position_backup_get.md "Get Positions from Backup") |
| --- | --- | --- |
| --- | --- |

Get the List of Backups
The request allows receiving creation dates of position backups within the specified time frame.
Request Format
GET /api/position/backup/list?from=beginning&to=end&server=identifier POST /api/position/backup/list?from=beginning&to=end&server=identifier  
---  
Response Format
{ "retcode" : "code description", "answer" : [ date list ] }  
---  
Example
//--- request to the server GET /api/position/backup/list?from=1546357749&to=1574351349 //--- server response { "retcode" : "0 Done", "answer" : [ 1574122620,1574209020,1574250008 ] }  
---  
Request Parameters
  * from — beginning of the period for which you want to receive the list of backups. The date is specified in seconds that have elapsed since 01.01.1970.
  * to — end of the period for which you want to receive the list of backups. The date is specified in seconds that have elapsed since 01.01.1970.
  * server — identifier of the backup server from which backups are requested. Optional parameter. If not specified, copies will be requested from the first backup server in the list.

Response Parameters
  * retcode — if successful, the command returns [the response code ](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — list of dates, for which there are backups on the server. The date is specified in seconds that have elapsed since 01.01.1970.

Note
The received dates can be used in [/api/position/backup/get](webapi_position_backup_get.md "Get Positions from Backup") to request position data from specific backups.