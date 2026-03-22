# TimeSubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Time ](imtmanagerapi_config_time.md "Time")/ TimeSubscribe | [](imtmanagerapi_timecreate.md "TimeCreate") [](imtmanagerapi_timeunsubscribe.md "TimeUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::TimeSubscribe
Subscribe to events associated with time configuration.
C++
MTAPIRES IMTManagerAPI::TimeSubscribe( IMTConTimeSink* sink // A pointer to the IMTConTimeSink object )  
---  
.NET
MTRetCode CIMTManagerAPI.TimeSubscribe( CIMTConTimeSink obj // CIMTConTimeSink object )  
---  
Python
ManagerAPI.TimeSubscribe( sink # IMTConTimeSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConTimeSink](imtcontimesink.md "IMTConTimeSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTConTimeSink](imtcontimesink.md "IMTConTimeSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
To receive [IMTConTimeSink::OnTimeSync](imtcontimesink_ontimesync.md "OnTimeSync") events, subscribe before calling the [IMTManagerAPI::Connect](imtmanagerapi_connect.md "Connect") method.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTManagerAPI::TimeUnsubscribe](imtmanagerapi_timeunsubscribe.md "TimeUnsubscribe") or until the administrator interface is deleted using the [IMTManagerAPI::Release](imtmanagerapi_release.md "Release") method.
To receive events connected with time configuration changes, the pumping mode [IMTManagerAPI::PUMP_MODE_TIME](imtmanagerapi_enpumpmodes.md "Pumping Mode") must be enabled.