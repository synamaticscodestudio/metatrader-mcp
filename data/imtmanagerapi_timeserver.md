# TimeServer (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Time ](imtmanagerapi_config_time.md "Time")/ TimeServer | [](imtmanagerapi_timeget.md "TimeGet") [](imtmanagerapi_timeserverrequest.md "TimeServerRequest") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::TimeServer
Get the calculated current time of the trading server.
C++
INT64 IMTManagerAPI::TimeServer()  
---  
.NET
long CIMTManagerAPI.TimeServer()  
---  
Python
ManagerAPI.TimeServer()  
---  
Return Value
The current trading time of the platform in the number of seconds elapsed since 01.01.1970.
Note
Unlike the [TimeServerRequest](imtmanagerapi_timeserverrequest.md "TimeServerRequest") function, the trading time is calculated on the Manager API application side: the current local computer time is adjusted in accordance with the server time zone.
In all configurations, databases and logs, the platform trading time is used, except where explicitly stated otherwise.