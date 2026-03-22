# TimeServerRequest (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Time ](imtadminapi_config_time.md "Functions")/ TimeServerRequest | [](imtadminapi_timeserver.md "TimeServer") [](imtadminapi_config_holiday.md "Functions") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::TimeServerRequest
Get the current time of the trading server.
C++
MTAPIRES IMTAdminAPI::TimeServerRequest( INT64& time_msc // server time )  
---  
.NET
MTRetCode CIMTAdminAPI.TimeServerRequest( out long time_msc // server time )  
---  
Python
AdminAPI.TimeServerRequest()  
---  
Parameters
time_msc
[out] The current trading time of the platform in the number of milliseconds elapsed since 01.01.1970.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Unlike [TimeServer](imtadminapi_timeserver.md "TimeServer"), the TimeServerRequest section directly requests time from the trading server rather than calculating it.
In all configurations, databases and logs, the platform trading time is used, except where explicitly stated otherwise.