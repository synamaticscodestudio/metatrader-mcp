# TimeGet (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ MTWebAPI Class ](mtwebapi.md "MTWebAPI Class") / [ Timing ](php_time.md "Timing")/ TimeGet | [](php_time.md "Timing") [](php_timeserver.md "TimeServer") |
| --- | --- | --- |
| --- | --- |

MTWebAPI::TimeGet
Get the working time configuration of the server.
MTAPIRES MTWebAPI::TimeGet( MTConTime &$time // Time configuration )  
---  
Parameters
&$time
[out] The MTConTime structure that describes the current settings of the server working time. Description of the structure parameters is provided in the ["Data Structure"](webapi_time_data_structure.md "Data Structure") section.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.