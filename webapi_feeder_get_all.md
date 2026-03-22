# Get All (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Data Feeds ](webapi_feeder.md "Data Feeds")/ Get All | [](webapi_feeder_get.md "Get by Name") [](webapi_feeder_module_total.md "Get Total Modules") |
| --- | --- | --- |
| --- | --- |

Get All Data Feeds
Get all existing data feed configurations.
Request Format
GET /api/feeder/get_all POST /api/feeder/get_all  
---  
Response Format
{ "retcode" : "code description", "answer" : [ { description }, { description }, { description }, ... ] }  
---  
Example
//--- request to the server GET /api/feeder/get_all //--- server response { "retcode" : "0 Done", "answer" : [ { "Feeder" : "MetaTrader 5 MetaQuotes", "Module" : "MetaTrader5Feeder64.exe", "GatewayServer" : "127.0.0.1:16391", "GatewayLogin" : "4", "GatewayPassword" : "password", "FeedServer" : "access.metatrader5.com:443", ... }, { "Feeder" : "IQ Feeder", "Module" : "IQFeeder64.exe", "GatewayServer" : "127.0.0.1:16391", "GatewayLogin" : "4", "GatewayPassword" : "password", "FeedServer" : "", ... } ] }  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — an array with descriptions of data feed configurations in JSON format. The complete description of the transmitted server parameters is provided under the ["Data Structure"](webapi_gateway_data_structure.md "Data Structure") section.
