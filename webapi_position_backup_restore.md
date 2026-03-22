# Restore from Backup (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Trading ](webapi_trading.md "Trading") / [ Positions ](webapi_positions.md "Positions")/ Restore from Backup | [](webapi_position_backup_get.md "Get Positions from Backup") [](webapi_position_check.md "Check Positions") |
| --- | --- | --- |
| --- | --- |

Restore Positions from Backup
The request allows restoring positions from backup databases.
Request Format
POST /api/position/backup/restore { Position description in JSON format }  
---  
Response Format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server POST /api/position/backup/restore { "Position" : "618", "ExternalID" : "", "Login" : "104366", ... } //--- server response { "retcode" : "0 Done", "answer" : {  "Position" : "618", "ExternalID" : "", "Login" : "104366", ... } }  
---  
Request Parameters
The request has no parameters. The description of the position to be restored is passed in JSON format as an additional body. To receive a position description from the backup, use the [/api/position/backup/get](webapi_position_backup_get.md "Get Positions from Backup") request.
Response Parameters
  * retcode — if successful, the command returns [the response code ](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — restored position parameters in JSON format. The complete description of position parameters is provided under the [Data Structure](webapi_position_data_structure.md "Data Structure") section.

Note
Restored positions are not deleted from the backup.