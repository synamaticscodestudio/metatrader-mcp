# Get by Name (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Routing ](webapi_route.md "Routing")/ Get by Name | [](webapi_route_next.md "Get by Index") [](webapi_route_get_all.md "Get All") |
| --- | --- | --- |
| --- | --- |

Get Routing Rule by Name
The request allows receiving a routing rule by its name.
Request Format
GET /api/route/get?name=name POST /api/route/get?name=name  
---  
Response Format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/route/get?name=Send%20to%20gateway //--- server response { "retcode" : "0 Done", "answer" : { "Name" : "Send to gateway", "Mode" : "1", "Request" : "33554431", "Type" : "255", "Flags" : "0", "Action" : "1001", "ActionValueInt" : "0", "ActionValueUInt" : "0", "ActionValueFloat" : "0.00", "ActionValueString" : "", "Conditions" : [ { "Condition" : "1000", "Rule" : "3", "ValueInt" : "0", "ValueUInt" : "1815998", "ValueFloat" : "0.00", "ValueString" : "" } ] "Dealers" : [ { "Login" : "227", "Name" : "MetaTrader 5 Gateway" } ] } }  
---  
Request Parameters
  * name — the name of the routing rule.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — the description of the routing rule in JSON format. The complete description of passed rule parameters is available under the ["Data structure"](webapi_route_data_structure.md "Data Structure") section.
