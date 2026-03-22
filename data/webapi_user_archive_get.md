# Get from Archive (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Users ](webapi_users.md "Users")/ Get from Archive | [](webapi_user_archive.md "Move to Archvie") [](webapi_user_archive_get_batch.md "Get Multiple from Archive") |
| --- | --- | --- |
| --- | --- |

Get User from the Archive
The request allows receiving information about a user from an archive database.
Request format
GET /api/user/archive/get?login=login POST /api/user/archive/get?login=login  
---  
Response format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/user/archive/get?login=764636 //--- server response { "retcode" : "0 Done", "answer" : { "Login": "764636", "Group": "demo\\\forex", "CertSerialNumber": "0", "Rights": "6627", "MQID": "F5986B14", "Registration": "1527173711", "LastAccess": "1527173713", "LastPassChange": "1527173711", ... } }  
---  
Request Parameters
  * login — the login of the user whose data should be retrieved from the archive database.

Response Parameters
  * retcode — if successful, the command returns [the response code ](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — user parameters in JSON format. The full description of passed client parameters is available under the ["Data structure"](webapi_user_data_structure.md "Data Structure") section.
