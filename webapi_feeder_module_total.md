# Get Total Modules (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Data Feeds ](webapi_feeder.md "Data Feeds")/ Get Total Modules | [](webapi_feeder_get_all.md "Get All") [](webapi_feeder_module_next.md "Get Module by Index") |
| --- | --- | --- |
| --- | --- |

Get Total Data Feed Modules
The request allows receiving the number of data feed modules available in the platform.
Request Format
GET /api/feeder/module/total POST /api/feeder/module/total  
---  
Response Format
{ "retcode" : "code description", "answer" : { "total" : "number" } }  
---  
Example
//--- request to the server GET /api/feeder/module/total //--- server response { "retcode" : "0 Done", "answer" : { "total" : "11" } }  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * total — number of data feed modules in the trading platform.
