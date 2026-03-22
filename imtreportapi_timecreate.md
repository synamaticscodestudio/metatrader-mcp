# TimeCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Time ](imtreportapi_config_time.md "Time")/ TimeCreate | [](imtreportapi_config_time.md "Time") [](imtreportapi_timecurrent.md "TimeCurrent") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::TimeCreate
Create an object of the time configuration.
IMTConTime* IMTReportAPI::TimeCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConTime](imtcontime.md "IMTConTime") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConTime::Release](imtcontime_release.md "Release") method of this object.