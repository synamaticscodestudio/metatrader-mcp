# TimeCurrentMsc (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Time ](serverapi_config_time.md "Time")/ TimeCurrentMsc | [](imtserverapi_timecurrent.md "TimeCurrent") [](imtserverapi_timeget.md "TimeGet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::TimeCurrentMsc
Gets the current trading time with millisecond accuracy.
INT64 IMTServerAPI::TimeCurrentMsc()  
---  
Return Value
The current trading time of the platform - the number of milliseconds elapsed since 01.01.1970.
Note
In all configurations, databases and logs, the platform trading time is used, except where explicitly stated otherwise.