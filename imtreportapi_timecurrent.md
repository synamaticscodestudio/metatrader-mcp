# TimeCurrent (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Time ](imtreportapi_config_time.md "Time")/ TimeCurrent | [](imtreportapi_timecreate.md "TimeCreate") [](imtreportapi_timegeneration.md "TimeGeneration") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::TimeCurrent
Get the current trading time.
INT64 IMTReportAPI::TimeCurrent()  
---  
Return Value
The current trading time of the platform - the number of seconds elapsed since 01.01.1970.
Note
In all configurations, databases and logs, the trading time of the platform is used, except where explicitly stated otherwise.