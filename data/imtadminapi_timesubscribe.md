# TimeSubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Time ](imtadminapi_config_time.md "Functions")/ TimeSubscribe | [](imtadminapi_timecreate.md "TimeCreate") [](imtadminapi_timeunsubscribe.md "TimeUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::TimeSubscribe
Subscribe to events associated with time configuration.
C++
MTAPIRES IMTAdminAPI::TimeSubscribe( IMTConTimeSink* sink // A pointer to the IMTConTimeSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.TimeSubscribe( CIMTConTimeSink sink // CIMTConTimeSink object )  
---  
Python
AdminAPI.TimeSubscribe( sink # IMTConTimeSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConTimeSink](imtcontimesink.md "IMTConTimeSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTConTimeSink](imtcontimesink.md "IMTConTimeSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
To receive [IMTConTimeSink::OnTimeSync](imtcontimesink_ontimesync.md "OnTimeSync") events, subscribe before calling the [IMTAdminAPI::Connect](imtadminapi_connect.md "Connect") method.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTAdminAPI::TimeUnsubscribe](imtadminapi_timeunsubscribe.md "TimeUnsubscribe") or until the administrator interface is deleted using the [IMTAdminAPI::Release](imtadminapi_release.md "Release") method.