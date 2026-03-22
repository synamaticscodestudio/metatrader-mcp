# TimeServer (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Time ](imtadminapi_config_time.md "Functions")/ TimeServer | [](imtadminapi_timeset.md "TimeSet") [](imtadminapi_timeserverrequest.md "TimeServerRequest") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::TimeServer
Get the calculated current time of the trading server.
C++
INT64 IMTAdminAPI::TimeServer()  
---  
.NET
long CIMTAdminAPI.TimeServer()  
---  
Python
AdminAPI.TimeServer()  
---  
Return Value
The current trading time of the platform in the number of seconds elapsed since 01.01.1970.
Note
Unlike the [TimeServerRequest](imtadminapi_timeserverrequest.md "TimeServerRequest") function, the trading time is calculated on the Manager API application side: the current local computer time is adjusted in accordance with the server time zone.
In all configurations, databases and logs, the platform trading time is used, except where explicitly stated otherwise.