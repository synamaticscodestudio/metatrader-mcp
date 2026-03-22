# Get Backups List (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Users ](webapi_users.md "Users")/ Get Backups List | [](webapi_user_restore.md "Restore from Archive") [](webapi_user_backup_get.md "Get User from Backup") |
| --- | --- | --- |
| --- | --- |

Get the List of Backups
The request allows receiving creation dates of user backups within the specified time frame.
Request format
GET /api/user/backup/list?from=beginning&to=end&server=identifier POST /api/user/backup/list?from=beginning&to=end&server=identifier  
---  
Response format
{ "retcode" : "code description", "answer" : [ date list ] }  
---  
Example
//--- request to the server GET /api/user/backup/list?from=1546357749&to=1574351349 //--- server response { "retcode" : "0 Done", "answer" : [ 1574122620,1574209020,1574250008 ] }  
---  
Request Parameters
  * from — beginning of the period for which you want to receive the list of backups. The date is specified in seconds that have elapsed since 01.01.1970.
  * to — end of the period for which you want to receive the list of backups. The date is specified in seconds that have elapsed since 01.01.1970.
  * server — identifier of the backup server from which backups are requested. Optional parameter. If not specified, copies will be requested from the first backup server in the list.

Response Parameters
  * retcode — if successful, the command returns [the response code ](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — list of dates, for which there are backups on the server. The date is specified in seconds that have elapsed since 01.01.1970.

Notes
The received dates can be used in [/api/user/backup/get](webapi_user_backup_get.md "Get User from Backup") to request user data from specific backups.