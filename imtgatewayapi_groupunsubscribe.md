# GroupUnsubscribe (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Groups ](imtgatewayapi_config_group.md "Functions")/ GroupUnsubscribe | [](imtgatewayapi_groupsubscribe.md "GroupSubscribe") [](imtgatewayapi_grouptotal.md "GroupTotal") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::GroupUnsubscribe
Unsubscribe from events and hooks associated with the groups configuration.
C++
MTAPIRES IMTGatewayAPI::GroupUnsubscribe( IMTConGroupSink* sink // A pointer to the IMTConGroupSink object )  
---  
.NET
MTRetCode CIMTGatewayAPI.GroupUnsubscribe( CIMTConGroupSink sink // CIMTConGroupSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConGroupSink](imtcongroupsink.md "IMTConGroupSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTGatewayAPI::GroupSubscribe](imtgatewayapi_groupsubscribe.md "GroupSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.