# Get by Name (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Gateways ](webapi_gateway.md "Gateways")/ Get by Name | [](webapi_gateway_next.md "Get by Index") [](webapi_gateway_get_all.md "Get All") |
| --- | --- | --- |
| --- | --- |

Get Gateway by Name
This request allows receiving a gateway configuration by its name.
Request Format
GET /api/gateway/get?name=name POST /api/gateway/get?name=name  
---  
Response Format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/gateway/get?name=MetaTrader%205%20Gateway //--- server response { "retcode" : "0 Done", "answer" : { "Name" : "MetaTrader 5 Gateway", "Module" : "MetaTrader5Gateway64.exe", "GatewayServer" : "127.0.0.1:16389", "GatewayLogin" : "6", "GatewayPassword" : "password", "TradingServer" : "access.metatrader5.com:443", "TradingLogin" : "1000", "TradingPassword" : "password", "Enable" : "0", "Flags" : "2", "ID" : "6", "Gateway" : "MT5GWTMT5", "AccountSummary" : "0", "TimeoutReconnect" : "1", "TimeoutSleep" : "60", "AttemptsSleep" : "5", ... } }  
---  
Request Parameters
  * name — gateway configuration name.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — description of the gateway configuration in JSON format. The complete description of passed server parameters is available under the ["Data structure"](webapi_gateway_data_structure.md "Data Structure") section.
