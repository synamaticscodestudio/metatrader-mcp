# Get Positions from Backup (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Trading ](webapi_trading.md "Trading") / [ Positions ](webapi_positions.md "Positions")/ Get Positions from Backup | [](webapi_position_backup_list.md "Get Backups List") [](webapi_position_backup_restore.md "Restore from Backup") |
| --- | --- | --- |
| --- | --- |

Get Positions from Backup
The request allows receiving information about one or more positions from a specific backup on the server.
Request Format
GET /api/position/backup/get?backup=date&login=login&from=beginning&to=end&server=identifier POST /api/position/backup/get?backup=date&login=login&from=beginning&to=end&server=identifier  
---  
Response Format
{ "retcode" : "code description", "answer" : [ description of positions ] }  
---  
Example
//--- request to the server GET /api/position/backup/get?backup=1574122620&login=104366 //--- server response { "retcode" : "0 Done", "answer" : [ {  "Position" : "618", "ExternalID" : "", "Login" : "104366", ... }, {  "Position" : "617", "ExternalID" : "", "Login" : "104366", ... }, ... ] }  
---  
Request Parameters
  * backup — backup copy date. To get the list of available backups, use the [/api/position/backup/list](webapi_position_backup_list.md "Get Backups List") request.
  * server — identifier of the backup server from which the position is requested. Optional parameter. If not specified, data will be requested from the first backup server in the list.
  * login — the login of the user whose positions should be retrieved from the backup database. Mandatory parameter.
  * from — the beginning of the period for requesting positions. The date is specified in seconds elapsed since 01.01.1970. Optional parameter.
  * from — the end of the period for requesting positions. The date is specified in seconds elapsed since 01.01.1970. Optional parameter.

Response Parameters
  * retcode — if successful, the command returns [the response code ](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — position parameters in JSON format. The complete description of the passed position parameters is provided under the [Data Structure](webapi_position_data_structure.md "Data Structure") section.
