# TimeUnsubscribe (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Time ](imtgatewayapi_config_time.md "Functions")/ TimeUnsubscribe | [](imtgatewayapi_timesubscribe.md "TimeSubscribe") [](imtgatewayapi_timecurrent.md "TimeCurrent") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::TimeUnsubscribe
Unsubscribe from events and hooks associated with the time configuration.
C++
MTAPIRES IMTGatewayAPI::TimeUnsubscribe( IMTConTimeSink* sink // A pointer to the IMTConTimeSink object )  
---  
.NET
MTRetCode CIMTGatewayAPI.TimeUnsubscribe( CIMTConTimeSink sink // CIMTConTimeSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConTimeSink](imtcontimesink.md "IMTConTimeSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTGatewayAPI::TimeSubscribe](imtgatewayapi_timesubscribe.md "TimeSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.