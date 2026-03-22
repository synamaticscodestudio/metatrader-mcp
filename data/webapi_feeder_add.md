# Add (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Data Feeds ](webapi_feeder.md "Data Feeds")/ Add | [](webapi_feeder_restart.md "Restart") [](webapi_feeder_delete.md "Delete") |
| --- | --- | --- |
| --- | --- |

Add Data Feed
The request allows adding and updating data feed configurations in the trading platform.
Request Format
POST /api/feeder/add { Description of the configuration to be created/updated, in JSON format }  
---  
Response Format
{ "retcode" : "code description", "answer" : { Description of the created/updated configuration in JSON format } }  
---  
Example
//--- request to the server POST /api/feeder/add { "Feeder" : "MetaTrader 5 MetaQuotes", "Module" : "MetaTrader5Feeder64.exe", "GatewayServer" : "127.0.0.1:16391", "GatewayLogin" : "4", "GatewayPassword" : "password", "FeedServer" : "access.metatrader5.com:443", "FeedLogin" : "1000", "FeedPassword" : "password", "Enable" : "1", "Mode" : "3", "TimeoutReconnect" : "1", "TimeoutSleep" : "60", "AttemptsSleep" : "5", "Params" : [ { "Type" : "0", "Name" : "CalendarHolidays", "Value" : "" ] } //--- server response { "retcode" : "0 Done", "answer" : { "Feeder" : "MetaTrader 5 MetaQuotes", "Module" : "MetaTrader5Feeder64.exe", "GatewayServer" : "127.0.0.1:16391", "GatewayLogin" : "4", "GatewayPassword" : "password", "FeedServer" : "access.metatrader5.com:443", "FeedLogin" : "1000", "FeedPassword" : "password", "Enable" : "1", "Mode" : "3", "TimeoutReconnect" : "1", "TimeoutSleep" : "60", "AttemptsSleep" : "5", "State" : { "SysConnection" : "1", "SysLastTime" : "1586353138", "Company" : "MetaQuotes Ltd.", ... }, "Params" : [ { "Type" : "0", "Name" : "CalendarHolidays", "Value" : "" ] } }  
---  
Request Parameters
The request has no parameters. The description of the data feed configuration being created/updated is passed in JSON format as an additional body. The JSON description of the configuration passed during creation is the same as the description returned by the server. The complete description of the possible parameters is provided in the ["Data structure"](webapi_feeder_data_structure.md "Data Structure") section.
Response Parameters
  * retcode � if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer � description of the created data feed configuration in JSON format. The description of parameters is given in the "[Data structure](webapi_feeder_data_structure.md "Data Structure")" section

Disclaimer
  * The request only works when connected to the main trade server. Otherwise error [12001](retcodes_api.md "API") is returned.
  * During request execution, the existence of the configuration to be added is checked. The key field to check is "Name". If the configuration already exists, the settings of this configuration are updated.
  * When adding a configuration, the fields which are not specified in the JSON description will be filled with default values. If a default value cannot be used, the request will return the error [3](retcodes_common.md "Common errors").
  * When you update the configuration, only those parameters that are explicitly specified in the JSON description are changed. Other parameters stay unchanged.
  * Before adding, the correctness of the account is checked. If the record is incorrect, the error code [3](retcodes_common.md "Common errors") is returned.
  * To run the request, [the Manager account](webapi_rest_authentication.htm#client_start) must have permissions to connect as an administrator and to edit data feed configurations. Otherwise, the error code [8](retcodes_common.md "Common errors") is returned.
