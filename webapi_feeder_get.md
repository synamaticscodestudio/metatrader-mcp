# Get by Name (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Data Feeds ](webapi_feeder.md "Data Feeds")/ Get by Name | [](webapi_feeder_next.md "Get by Index") [](webapi_feeder_get_all.md "Get All") |
| --- | --- | --- |
| --- | --- |

Get Data Feed by Name
This request allows receiving a data feed configuration by its name.
Request Format
GET /api/feeder/get?name=name POST /api/feeder/get?name=name  
---  
Response Format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/feeder/get?name=MetaTrader%205%20MetaQuotes //--- server response { "retcode" : "0 Done", "answer" : { "Feeder" : "MetaTrader 5 MetaQuotes", "Module" : "MetaTrader5Feeder64.exe", "GatewayServer" : "127.0.0.1:16391", "GatewayLogin" : "4", "GatewayPassword" : "password", "FeedServer" : "access.metatrader5.com:443", "FeedLogin" : "1000", "FeedPassword" : "password", "Enable" : "1", "Mode" : "3", "TimeoutReconnect" : "1", "TimeoutSleep" : "60", "AttemptsSleep" : "5", "State" : { "SysConnection" : "1", "SysLastTime" : "1586353138", "Company" : "MetaQuotes Ltd.", ... }, "Params" : [ { "Type" : "0", "Name" : "CalendarHolidays", "Value" : "" ] } }  
---  
Request Parameters
  * name — data feed configuration name.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — description of the data feed configuration in JSON format. The complete description of passed server parameters is available under the ["Data structure"](webapi_feeder_data_structure.md "Data Structure") section.
