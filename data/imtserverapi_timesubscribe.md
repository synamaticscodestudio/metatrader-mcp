# TimeSubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Time ](serverapi_config_time.md "Time")/ TimeSubscribe | [](imtserverapi_timecreate.md "TimeCreate") [](imtserverapi_timeunsubscribe.md "TimeUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::TimeSubscribe
Subscribe to events and hooks associated with the time configuration.
MTAPIRES IMTServerAPI::TimeSubscribe( IMTConTimeSink* sink // A pointer to the IMTConTimeSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConTimeSink](imtcontimesink.md "IMTConTimeSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTConTimeSink](imtcontimesink.md "IMTConTimeSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTServerAPI::TimeUnsubscribe](imtserverapi_timeunsubscribe.md "TimeUnsubscribe") or until the plugin is deleted.