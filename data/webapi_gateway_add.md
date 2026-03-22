# Add (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Gateways ](webapi_gateway.md "Gateways")/ Add | [](webapi_gateway_restart.md "Restart") [](webapi_gateway_delete.md "Delete") |
| --- | --- | --- |
| --- | --- |

Add Gateway
The request allows adding and updating gateway configurations in the trading platform.
Request Format
POST /api/gateway/add { Description of the configuration to be created/updated, in JSON format }  
---  
Response Format
{ "retcode" : "code description", "answer" : { Description of the created/updated configuration in JSON format } }  
---  
Example
//--- request to the server POST /api/gateway/add { "Name" : "MetaTrader 5 Gateway", "Module" : "MetaTrader5Gateway64.exe", "GatewayServer" : "127.0.0.1:16389", "GatewayLogin" : "6", "GatewayPassword" : "password", "TradingServer" : "access.metatrader5.com:443", "TradingLogin" : "1000", "TradingPassword" : "password", "Enable" : "1", "Flags" : "2", "ID" : "6", "Params" : [  { "Type" : "0", "Name" : "Max Price Deviation", "Value" : "50" } ] } //--- server response { "retcode" : "0 Done", "answer" : { "Name" : "MetaTrader 5 Gateway", "Module" : "MetaTrader5Gateway64.exe", "GatewayServer" : "127.0.0.1:16389", "GatewayLogin" : "6", "GatewayPassword" : "password", "TradingServer" : "access.metatrader5.com:443", "TradingLogin" : "1000", "TradingPassword" : "password", "Enable" : "0", "Flags" : "2", "ID" : "6", "Gateway" : "MT5GWTMT5", "AccountSummary" : "0", "TimeoutReconnect" : "1", "TimeoutSleep" : "60", "AttemptsSleep" : "5", ... } }  
---  
Request Parameters
The request has no parameters. The description of the gateway configuration being created/updated is passed in JSON format as an additional body. The JSON description of the configuration passed during creation is the same as the description returned by the server. The complete description of the possible parameters is provided in the ["Data structure"](webapi_gateway_data_structure.md "Data Structure") section.
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — description of the created gateway configuration in JSON format. The description of parameters is given in the "[Data structure](webapi_gateway_data_structure.md "Data Structure")" section

Note
  * The request only works when connected to the main trade server. Otherwise error [12001](retcodes_api.md "API") is returned.
  * When the request is run, the existence of the configuration to be added is checked. The key field to check is "Name". If the configuration already exists, the settings of this configuration are updated.
  * When adding a configuration, the fields which are not specified in the JSON description will be filled with default values. If a default value cannot be used, the request will return the error [3](retcodes_common.md "Common errors").
  * When you update the configuration, only those parameters that are explicitly specified in the JSON description are changed. Other parameters stay unchanged.
  * Before adding, the correctness of the account is checked. If the record is incorrect, the error code [3](retcodes_common.md "Common errors") is returned.
  * To run the request, [the Manager account](webapi_rest_authentication.htm#client_start) must have permissions to connect as an administrator and to edit gateway configurations. Otherwise, the error code [8](retcodes_common.md "Common errors") is returned.
