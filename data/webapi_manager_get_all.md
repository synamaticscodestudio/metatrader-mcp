# Get All (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Managers ](webapi_manager.md "Managers")/ Get All | [](webapi_manager_get.md "Get by Login") [](webapi_route.md "Routing") |
| --- | --- | --- |
| --- | --- |

Get All Managers
Get all existing manager configurations.
Request Format
GET /api/manager/get_all POST /api/manager/get_all  
---  
Response Format
{ "retcode" : "code description", "answer" : [ { description }, { description }, { description }, ... ] }  
---  
Example
//--- request to the server GET /api/manager/get_all //--- server response { "retcode" : "0 Done", "answer" : [ { "Login" : "1200", "Name" : "John Smith", "Mailbox" : "Administrator", "Server" : "1", "Rights" : ["1", "1", "1", ...], "RequestLimitLogs" : "0", "RequestLimitReports" : "0", ... }, { "Login" : "1000", "Name" : "Joe Black", "Mailbox" : "Joe Black", "Server" : "1", "Rights" : ["1", "1", "1", ...], "RequestLimitLogs" : "0", "RequestLimitReports" : "0", ... } ] }  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — an array with descriptions of manager configurations in JSON format. The complete description of the transmitted server parameters is provided under the ["Data Structure"](webapi_manager_data_structure.md "Data Structure") section.
