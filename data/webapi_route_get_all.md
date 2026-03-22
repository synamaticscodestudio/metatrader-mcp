# Get All (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Routing ](webapi_route.md "Routing")/ Get All | [](webapi_route_get.md "Get by Name") [](webapi_history_sync.md "History Synchronization") |
| --- | --- | --- |
| --- | --- |

Get All Routing Rules
Get all existing routing rules.
Request Format
GET /api/route/get_all POST /api/route/get_all  
---  
Response Format
{ "retcode" : "code description", "answer" : [ { description }, { description }, { description }, ... ] }  
---  
Example
//--- request to the server GET /api/route/get_all //--- server response { "retcode" : "0 Done", "answer" : [ { "Name" : "Send to gateway", "Mode" : "1", "Request" : "33554431", "Type" : "255", "Flags" : "0", "Action" : "1001", "ActionValueInt" : "0", "ActionValueUInt" : "0", "ActionValueFloat" : "0.00", "ActionValueString" : "", ... }, "Name" : "Confirm", "Mode" : "2", "Type" : "255", "Flags" : "0", "Action" : "1006", "ActionValueInt" : "0", "ActionValueUInt" : "0", "ActionValueFloat" : "0.00", "ActionValueString" : "", ... }, ] }  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — an array with descriptions of routing rules in JSON format. The complete description of the transmitted server parameters is provided under the ["Data Structure"](webapi_route_data_structure.md "Data Structure") section.
