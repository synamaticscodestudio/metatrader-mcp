# TimeGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Time ](serverapi_config_time.md "Time")/ TimeGet | [](imtserverapi_timecurrentmsc.md "TimeCurrentMsc") [](imtserverapi_timeset.md "TimeSet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::TimeGet
Get the time configuration.
MTAPIRES IMTServerAPI::TimeGet( IMTConTime* config // An object of time configuration )  
---  
Parameters
config
[out] An object of the time configuration. The config object must first be created using the [IMTServerAPI::TimeCreate](imtserverapi_timecreate.md "TimeCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.