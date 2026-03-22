# TimeCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Time ](imtmanagerapi_config_time.md "Time")/ TimeCreate | [](imtmanagerapi_config_time.md "Time") [](imtmanagerapi_timesubscribe.md "TimeSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::TimeCreate
Create an object of the time configuration.
C++
IMTConTime* IMTManagerAPI::TimeCreate()  
---  
.NET
CIMTConTime CIMTManagerAPI.TimeCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConTime](imtcontime.md "IMTConTime") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConTime::Release](imtcontime_release.md "Release") method of this object.