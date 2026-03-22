# Restore from Archive (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Users ](webapi_users.md "Users")/ Restore from Archive | [](webapi_user_archive_get_batch.md "Get Multiple from Archive") [](webapi_user_backup_list.md "Get Backups List") |
| --- | --- | --- |
| --- | --- |

Restore User from Archive
The request allows restoring users from archive or backup.
Request format
POST /api/user/restore { User description in JSON format }  
---  
Response format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server POST /api/user/restore { "Login" : "954402", "Group" : "demoforex", "CertSerialNumber" : "0", "Rights" : "2531", "MQID" : "5CD369A9", "Registration" : "1572956466", "LastAccess" : "1572956466", "LastPassChange" : "1572956466", "Name" : "JohnSmith", "Company" : "Individual", ... } //--- server response { "retcode" : "0 Done", "answer" : {  "Login" : "954402", "Group" : "demoforex", "CertSerialNumber" : "0", "Rights" : "2531", "MQID" : "5CD369A9", "Registration" : "1572956466", "LastAccess" : "1572956466", "LastPassChange" : "1572956466", "Name" : "JohnSmith", "Company" : "Individual", ... } }  
---  
Request Parameters
The request has no parameters. The description of the user to be restored is passed in JSON format as an additional body. To get a user description from archive or backup, use the [/api/user/backup/get](webapi_user_backup_get.md "Get User from Backup") request.
Response Parameters
  * retcode — if successful, the command returns [the response code ](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — parameters of a restored user in JSON format. The full description of passed client parameters is available under the ["Data structure"](webapi_user_data_structure.md "Data Structure") section.

Note
  * Restored users are not deleted from the archive.
  * When a recovered account is once again moved to archive or backup, new data replace previously stored data.
