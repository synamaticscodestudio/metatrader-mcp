# TimeCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Time ](serverapi_config_time.md "Time")/ TimeCreate | [](serverapi_config_time.md "Time") [](imtserverapi_timesubscribe.md "TimeSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::TimeCreate
Create an object of the time configuration.
IMTConTime* IMTServerAPI::TimeCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConTime](imtcontime.md "IMTConTime") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConTime::Release](imtcontime_release.md "Release") method of this object.