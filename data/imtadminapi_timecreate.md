# TimeCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Time ](imtadminapi_config_time.md "Functions")/ TimeCreate | [](imtadminapi_config_time.md "Functions") [](imtadminapi_timesubscribe.md "TimeSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::TimeCreate
Create an object of the time configuration.
C++
IMTConTime* IMTAdminAPI::TimeCreate()  
---  
.NET
CIMTConTime CIMTAdminAPI.TimeCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConTime](imtcontime.md "IMTConTime") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConTime::Release](imtcontime_release.md "Release") method of this object.