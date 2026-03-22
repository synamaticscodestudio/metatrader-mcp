# CommonUnsubscribe (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Common ](imtgatewayapi_config_common.md "Functions")/ CommonUnsubscribe | [](imtgatewayapi_commonsubscribe.md "CommonSubscribe") [](imtgatewayapi_commonget.md "CommonGet") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::CommonUnsubscribe
Unsubscribe from events associated with the common configuration of the platform.
C++
MTAPIRES IMTGatewayAPI::CommonUnsubscribe( IMTConCommonSink* sink // Pointer to the IMTConCommonSink object )  
---  
.NET
MTRetCode CIMTGatewayAPI.CommonUnsubscribe( CIMTConCommonSink sink // CIMTConCommonSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConCommonSink](imtconcommonsink.md "IMTConCommonSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTGatewayAPI::CommonSubscribe](imtgatewayapi_commonsubscribe.md "CommonSubscribe"). If an attempt is made to unsubscribe from the interface which has not been previously subscribed, the [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.
The method is not available for data feeds.