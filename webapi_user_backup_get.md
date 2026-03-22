# Get User from Backup (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Users ](webapi_users.md "Users")/ Get User from Backup | [](webapi_user_backup_list.md "Get Backups List") [](webapi_notifications_send.md "Send Push Notifications") |
| --- | --- | --- |
| --- | --- |

Get User from Backup
The request allows receiving information about a user from a specific backup on the server.
Request format
GET /api/user/backup/get?backup=data&login=login POST /api/user/backup/get?backup=data&login=login  
---  
Response format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/user/backup/get?backup=1574122620&login=104366 //--- server response { "retcode" : "0 Done", "answer" : { "Login": "764636", "Group": "demo\\\forex", "CertSerialNumber": "0", "Rights": "6627", "MQID": "F5986B14", "Registration": "1527173711", "LastAccess": "1527173713", "LastPassChange": "1527173711", ... } }  
---  
Request Parameters
  * backup — backup copy date. To get the list of available backups, use the [/user_back_list](webapi_user_backup_list.md "Get Backups List") request. To request data from archive, specify the 0 value.
  * login — the login of the user whose data should be retrieved from the archive database.

Response Parameters
  * retcode — if successful, the command returns [the response code ](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — user parameters in JSON format. The full description of passed client parameters is available under the ["Data structure"](webapi_user_data_structure.md "Data Structure") section.
