# Update Settings (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Time ](webapi_time.md "Time")/ Update Settings | [](webapi_time_get.md "Get Settings") [](webapi_groups.md "Groups") |
| --- | --- | --- |
| --- | --- |

Update Time Settings
The request allows updating platform operation hour settings.
Request format
POST /api/time/set Time configuration in JSON format  
---  
Response format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server POST /api/time/set { "Daylight" : "1", "TimeZone" : "60", "TimeServer" : "10.15.0.57", "Days" : [ ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"], ["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"], ["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"], ["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"], ["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"] ] } //--- server response { "retcode" : "0 Done" }  
---  
Request Parameters
The request has no parameters. Time configuration description is passed in JSON foprmat as an additional body. Only the following parameters can be changed:
  * Parameters can be changed individually, and thus it is not necessary to pass the entire configuration. The parameters which are not described in a request will not be changed.
  * The DaylightState parameter cannot be changed.

The complete description of time parameters is provided under the ["Data structure"](webapi_time_data_structure.md "Data Structure") section.
The JSON description of the configuration passed during the update is the same as the description returned by the server.
Response Parameters
  * retcode — if successful, the command returns [the response code ](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
