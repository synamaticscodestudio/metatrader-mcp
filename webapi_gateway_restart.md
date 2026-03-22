# Restart (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Gateways ](webapi_gateway.md "Gateways")/ Restart | [](webapi_gateway_data_structure.md "Data Structure") [](webapi_gateway_add.md "Add") |
| --- | --- | --- |
| --- | --- |

Restart Gateways
The request allows restarting all gateways in the platform.
Request Format
GET /api/gateway/restart POST /api/gateway/restart  
---  
Response Format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server GET /api/gateway/restart //--- server response { "retcode" : "0 Done" }  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
