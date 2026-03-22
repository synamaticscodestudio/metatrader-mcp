# CommonSubscribe (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Common ](imtgatewayapi_config_common.md "Functions")/ CommonSubscribe | [](imtgatewayapi_commoncreate.md "CommonCreate") [](imtgatewayapi_commonunsubscribe.md "CommonUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::CommonSubscribe
Subscribe to events associated with the common configuration of the platform.
C++
MTAPIRES IMTGatewayAPI::CommonSubscribe( IMTConCommonSink* sink // Pointer to the IMTConCommonSink object )  
---  
.NET
MTRetCode CIMTGatewayAPI.CommonSubscribe( CIMTConCommonSink sink // CIMTConCommonSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConCommonSink](imtconcommonsink.md "IMTConCommonSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same [IMTConCommonSink](imtconcommonsink.md "IMTConCommonSink") interface cannot subscribe to an event twice. The [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") response code is returned in this case.
The object at which 'sink' points, must remain in the memory (must not be removed) until the call of [CommonUnsubscribe](imtgatewayapi_commonunsubscribe.md "CommonUnsubscribe") or until the interface is deleted by the [IMTGatewayAPI::Release](imtgatewayapi_release.md "Release") method.
The method is not available for data feeds.