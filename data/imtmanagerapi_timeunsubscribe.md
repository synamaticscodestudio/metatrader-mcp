# TimeUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Time ](imtmanagerapi_config_time.md "Time")/ TimeUnsubscribe | [](imtmanagerapi_timesubscribe.md "TimeSubscribe") [](imtmanagerapi_timeget.md "TimeGet") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::TimeUnsubscribe
Unsubscribe from events associated with time configuration.
C++
MTAPIRES IMTManagerAPI::TimeUnsubscribe( IMTConTimeSink* sink // A pointer to the IMTConTimeSink object )  
---  
.NET
MTRetCode CIMTManagerAPI.TimeUnsubscribe( CIMTConTimeSink obj  // CIMTConTimeSink object )  
---  
Python
ManagerAPI.TimeUnsubscribe( sink  # IMTConTimeSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConTimeSink](imtcontimesink.md "IMTConTimeSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method is pared to [IMTManagerAPI::TimeSubscribe](imtmanagerapi_timesubscribe.md "TimeSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.