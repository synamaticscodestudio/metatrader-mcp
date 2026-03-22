# Get by Login (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Managers ](webapi_manager.md "Managers")/ Get by Login | [](webapi_manager_next.md "Get by Index") [](webapi_manager_get_all.md "Get All") |
| --- | --- | --- |
| --- | --- |

Get Manager by Login
The request allows receiving manager configuration by login.
Request Format
GET /api/manager/get?login=login POST /api/manager/get?login=login  
---  
Response Format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/manager/get?login=1020 //--- server response { "retcode" : "0 Done", "answer" : { "Login" : "1200", "Name" : "John Smith", "Mailbox" : "Administrator", "Server" : "1", "Rights" : ["1", "1", "1", ...], "RequestLimitLogs" : "0", "RequestLimitReports" : "0", "Groups" : [ { "Group" : "*" } ], "Access" : [], } }  
---  
Request Parameters
  * login — manager login.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — manager configuration in JSON format. The complete description of passed parameters is available under the ["Data structure"](webapi_manager_data_structure.md "Data Structure") section.
