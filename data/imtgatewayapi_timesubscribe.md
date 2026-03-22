# TimeSubscribe (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Time ](imtgatewayapi_config_time.md "Functions")/ TimeSubscribe | [](imtgatewayapi_timecreate.md "TimeCreate") [](imtgatewayapi_timeunsubscribe.md "TimeUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::TimeSubscribe
Subscribe to events and hooks associated with the time configuration.
C++
MTAPIRES IMTGatewayAPI::TimeSubscribe( IMTConTimeSink* sink // A pointer to the IMTConTimeSink object )  
---  
.NET
MTRetCode CIMTGatewayAPI.TimeSubscribe( CIMTConTimeSink sink // CIMTConTimeSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConTimeSink](imtcontimesink.md "IMTConTimeSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTConTimeSink](imtcontimesink.md "IMTConTimeSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTGatewayAPI::TimeUnsubscribe](imtgatewayapi_timeunsubscribe.md "TimeUnsubscribe") or until the plugin is deleted.