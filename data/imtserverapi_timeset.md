# TimeSet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Time ](serverapi_config_time.md "Time")/ TimeSet | [](imtserverapi_timeget.md "TimeGet") [](serverapi_config_holiday.md "Holidays") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::TimeSet
Set the time configuration.
MTAPIRES IMTServerAPI::TimeSet( const IMTConTime* config // An object of time configuration )  
---  
Parameters
config
[in] An object of time configuration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
When setting a configuration, a check is made whether changes are added. If there are no changes, no update is made and therefore the [IMTConTimeSink::OnTimeUpdate](imtcontimesink_ontimeupdate.md "OnTimeUpdate") notification method is not called.