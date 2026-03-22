# Get Settings (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Time ](webapi_time.md "Time")/ Get Settings | [](webapi_time_server.md "Get Server Time") [](webapi_time_set.md "Update Settings") |
| --- | --- | --- |
| --- | --- |

Getting Time Settings
This request is used for receiving the working time settings of the platform.
Request format
GET /api/time/get POST /api/time/get  
---  
Response format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/time/get //--- server response { "retcode" : "0 Done", "answer" : { "Daylight" : "1", "DaylightState" : "0", "TimeZone" : "60", "TimeServer" : "10.150.180.65", "Days" : [ [Array], [Array], [Array], [Array], [Array], [Array], [Array] ] } }  
---  
Response Parameters
  * retcode — if successful, the command returns [a response code](retcodes_successful.md "Successful completion") 0\. Otherwise, it will return an error code.
  * answer — platform working time configuration in JSON format. The description of the passed parameters is given in the ["Data structure"](webapi_time_data_structure.md "Data Structure") section.
