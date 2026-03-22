# Get Multiple from Archive (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Users ](webapi_users.md "Users")/ Get Multiple from Archive | [](webapi_user_archive_get.md "Get from Archive") [](webapi_user_restore.md "Restore from Archive") |
| --- | --- | --- |
| --- | --- |

Get multiple users from an archive
This query enables a bulk query of user data from an archive database, using a list of logins or groups.
Request Format
GET /api/user/archive/get_batch?login=logins GET /api/user/archive/get_batch?group=groups POST /api/user/archive/get_batch?login=logins POST /api/user/archive/get_batch?group=groups  
---  
Response Format
{ "retcode" : "code description", "answer" : [ user description ] }  
---  
Example
//--- request to the server GET /api/user/archive/get_batch?login=764636,764637 //--- server response { "retcode" : "0 Done", "answer" : [ { "Login": "764636", "Group": "demo\\\forex", "CertSerialNumber": "0", "Rights": "6627", "MQID": "F5986B14", "Registration": "1527173711", "LastAccess": "1527173713", "LastPassChange": "1527173711", ... }, { "Login": "764637", "Group": "demo\\\forex", "CertSerialNumber": "0", "Rights": "6627", "MQID": "H5926B36", "Registration": "1527186511", "LastAccess": "1527186513", "LastPassChange": "1527186511", ... }, ] }  
---  
Request Parameters
  * login — list of user logins whose data you want to receive. A commas separated list.
  * group — the list of groups, for users from which you want to receive data. A commas separated list.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — array of user descriptions in JSON format. The full description of the passed client parameters is given in the [Data structure](webapi_user_data_structure.md "Data Structure") section.

Note
Only one of the parameters can be used in the request. Multiple lists are not allowed.