# TimeGet (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ .NET Implementation of Protocol ](net.md "Protocol Implementation in .NET") / [ MT5WebAPI Class ](net_mtwebapi.md "MT5WebAPI Class") / [ Timing ](net_time.md "Timing")/ TimeGet | [](net_time.md "Timing") [](net_timeserver.md "TimeServer") |
| --- | --- | --- |
| --- | --- |

MT5WebAPI.TimeGet
Get the working time configuration of the server.
MTRetCode MT5WebAPI.TimeGet( out MTConTime time // Time configuration )  
---  
Parameters
time
[out] The MTConTime structure that describes the current settings of the server working time. Description of the structure parameters is provided in the ["Data Structure"](webapi_time_data_structure.md "Data Structure") section.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.