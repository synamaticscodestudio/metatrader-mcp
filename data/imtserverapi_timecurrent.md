# TimeCurrent (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Time ](serverapi_config_time.md "Time")/ TimeCurrent | [](imtserverapi_timeunsubscribe.md "TimeUnsubscribe") [](imtserverapi_timecurrentmsc.md "TimeCurrentMsc") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::TimeCurrent
Get the current trading time.
INT64 IMTServerAPI::TimeCurrent()  
---  
Return Value
The current trading time of the platform - the number of seconds elapsed since 01.01.1970.
Note
In all configurations, databases and logs, the trading time of the platform is used, except where explicitly stated otherwise.