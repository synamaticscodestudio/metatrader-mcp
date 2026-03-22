# TimeUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Time ](imtadminapi_config_time.md "Functions")/ TimeUnsubscribe | [](imtadminapi_timesubscribe.md "TimeSubscribe") [](imtadminapi_timeget.md "TimeGet") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::TimeUnsubscribe
Unsubscribe from events associated with time configuration.
C++
MTAPIRES IMTAdminAPI::TimeUnsubscribe( IMTConTimeSink* sink // A pointer to the IMTConTimeSink object )  
---  
.NT
MTRetCode CIMTAdminAPI.TimeUnsubscribe( CIMTConTimeSink sink // CIMTConTimeSink object )  
---  
Python
AdminAPI.TimeUnsubscribe( sink # IMTConTimeSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConTimeSink](imtcontimesink.md "IMTConTimeSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTAdminAPI::TimeSubscribe](imtadminapi_timesubscribe.md "TimeSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.