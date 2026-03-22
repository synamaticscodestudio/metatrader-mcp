# Get Server Time (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Time ](webapi_time.md "Time")/ Get Server Time | [](webapi_time_data_structure.md "Data Structure") [](webapi_time_get.md "Get Settings") |
| --- | --- | --- |
| --- | --- |

Getting Server Time
This request is used for receiving the current time of the server.
Request format
GET /api/time/server POST /api/time/server  
---  
Response format
{ "retcode" : "code description", "answer" : { "Time" : "unix-time yyyy.mm.dd hh:mm:ss" } }  
---  
Example
//--- request to the server GET /api/time/server //--- server response { "retcode" : "0 Done", "answer" : { "Time": "1572518788 2019.10.31 10:46:28" } }  
---  
Response Parameters
  * retcode — if successful, the command returns [a response code](retcodes_successful.md "Successful completion") 0\. Otherwise, it will return an error code.
  * time — current server time. In the first value the unix time is passed (number of seconds that have elapsed since 01.01.1970), in the second value the text representation of the date and time is passed.
