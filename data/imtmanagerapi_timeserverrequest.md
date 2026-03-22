# TimeServerRequest (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Time ](imtmanagerapi_config_time.md "Time")/ TimeServerRequest | [](imtmanagerapi_timeserver.md "TimeServer") [](imtmanagerapi_config_holiday.md "Holidays") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::TimeServerRequest
Get the current time of the trading server.
C++
MTAPIRES IMTManagerAPI::TimeServerRequest( INT64& time_msc // server time )  
---  
.NET
MTRetCode CIMTManagerAPI.TimeServerRequest( out long time_msc // server time )  
---  
Python
ManagerAPI.TimeServerRequest()  
---  
Parameters
time_msc
[out] The current trading time of the platform in the number of milliseconds elapsed since 01.01.1970.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Unlike [TimeServer](imtmanagerapi_timeserver.md "TimeServer"), the TimeServerRequest section directly requests time from the trading server rather than calculating it.
In all configurations, databases and logs, the platform trading time is used, except where explicitly stated otherwise.