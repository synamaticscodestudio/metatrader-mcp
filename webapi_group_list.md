# Get List (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Groups ](webapi_groups.md "Groups")/ Get List | [](webapi_group_total.md "Get Total") [](webapi_group_next.md "Get by Index") |
| --- | --- | --- |
| --- | --- |

Get a List of Groups
Get the list of groups available on the trade server.
Request Format
GET /api/group/list POST /api/group/list  
---  
Response Format
{ "retcode" : "code description", "answer" : [ list of groups ] }  
---  
Example
//--- request to the server GET /api/group/list //--- server response { "retcode" : "0 Done", "answer" : [ "managers\\\administrators", "managers\\\dealers", "demo\\\forex-hedge-usd-01", ... ] }  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — list of available symbols.

Note
The request operates taking into account the availability of groups for the manager account used to [connect to the server](webapi_rest_authentication.md "Authentication").