# Get by Index (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Data Feeds ](webapi_feeder.md "Data Feeds")/ Get by Index | [](webapi_feeder_total.md "Get Total") [](webapi_feeder_get.md "Get by Name") |
| --- | --- | --- |
| --- | --- |

Get Data Feed by Index
Get the configuration of one or more data feeds by index in the list.
Request Format
GET /api/feeder/next?index=index&count=number POST /api/feeder/next?index=index&count=number  
---  
Response Format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/feeder/next?index=0 //--- server response { "retcode" : "0 Done", "answer" : { "Feeder" : "MetaTrader 5 MetaQuotes", "Module" : "MetaTrader5Feeder64.exe", "GatewayServer" : "127.0.0.1:16391", "GatewayLogin" : "4", "GatewayPassword" : "password", "FeedServer" : "access.metatrader5.com:443", "FeedLogin" : "1000", "FeedPassword" : "password", "Enable" : "1", "Mode" : "3", "TimeoutReconnect" : "1", "TimeoutSleep" : "60", "AttemptsSleep" : "5", "State" : { "SysConnection" : "1", "SysLastTime" : "1586353138", "Company" : "MetaQuotes Ltd.", ... }, "Params" : [ { "Type" : "0", "Name" : "CalendarHolidays", "Value" : "" ] } }  
---  
Request Parameters
  * index — data feed configuration index starting with 0.
  * count — the number of configurations to get. If the parameter is not set or is equal to 1, the query returns one object with a configuration description. If count > 1, the query will return an array of objects. For example, when sending a query with parameters ?index=1&count=3, you will get three configurations, from the second to the fourth one.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned. If an index of a nonexistent data feed is requested, the response code [13](retcodes_common.md "Common errors") is returned.
  * answer — description of the data feed configuration in JSON format. The complete description of passed server parameters is available under the ["Data structure"](webapi_gateway_data_structure.md "Data Structure") section.
