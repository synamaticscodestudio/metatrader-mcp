# TimeGet (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Time ](imtreportapi_config_time.md "Time")/ TimeGet | [](imtreportapi_timegeneration.md "TimeGeneration") [](imtreportapi_config_holiday.md "Holidays") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::TimeGet
Get the time configuration.
MTAPIRES IMTReportAPI::TimeGet( IMTConTime* config // An object of time configuration )  
---  
Parameters
config
[out] An object of the time configuration. The config object must first be created using the [IMTReportAPI::TimeCreate](imtreportapi_timecreate.md "TimeCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.