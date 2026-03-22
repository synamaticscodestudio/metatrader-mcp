# Restart (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Data Feeds ](webapi_feeder.md "Data Feeds")/ Restart | [](webapi_feeder_data_structure.md "Data Structure") [](webapi_feeder_add.md "Add") |
| --- | --- | --- |
| --- | --- |

Restart Data Feed
The request allows restarting all data feeds in the platform.
Request Format
GET /api/feeder/restart POST /api/feeder/restart  
---  
Response Format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server GET /api/feeder/restart //--- server response { "retcode" : "0 Done" }  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
