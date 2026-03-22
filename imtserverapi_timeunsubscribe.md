# TimeUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Time ](serverapi_config_time.md "Time")/ TimeUnsubscribe | [](imtserverapi_timesubscribe.md "TimeSubscribe") [](imtserverapi_timecurrent.md "TimeCurrent") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::TimeUnsubscribe
Unsubscribe from events and hooks associated with the time configuration.
MTAPIRES IMTServerAPI::TimeUnsubscribe( IMTConTimeSink* sink // A pointer to the IMTConTimeSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConTimeSink](imtcontimesink.md "IMTConTimeSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTServerAPI::TimeSubscribe](imtserverapi_timesubscribe.md "TimeSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.