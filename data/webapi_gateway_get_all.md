# Get All (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Gateways ](webapi_gateway.md "Gateways")/ Get All | [](webapi_gateway_get.md "Get by Name") [](webapi_gateway_module_total.md "Get Total Modules") |
| --- | --- | --- |
| --- | --- |

Get All Gateways
Get all existing gateway configurations.
Request Format
GET /api/gateway/get_all POST /api/gateway/get_all  
---  
Response Format
{ "retcode" : "code description", "answer" : [ { description }, { description }, { description }, ... ] }  
---  
Example
//--- request to the server GET /api/gateway/get_all //--- server response { "retcode" : "0 Done", "answer" : [ { "Name" : "MetaTrader 5 Gateway", "Module" : "MetaTrader5Gateway64.exe", "GatewayServer" : "127.0.0.1:16389", "GatewayLogin" : "6", "GatewayPassword" : "password", "TradingServer" : "access.metatrader5.com:443", "TradingLogin" : "1000", "TradingPassword" : "password", ... }, { "Name" : "LMAX Gateway", "Module" : "LmaxGateway64.exe", "GatewayServer" : "127.0.0.1:16007", "GatewayLogin" : "100", "GatewayPassword" : "password", "TradingServer" : "fix-order.london-demo.lmax.com:443", "TradingLogin" : "demo", "TradingPassword" : "password", ... } ] }  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — an array with descriptions of gateway configurations in JSON format. The complete description of the transmitted server parameters is provided under the ["Data Structure"](webapi_gateway_data_structure.md "Data Structure") section.
