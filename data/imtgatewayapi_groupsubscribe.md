# GroupSubscribe (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Groups ](imtgatewayapi_config_group.md "Functions")/ GroupSubscribe | [](imtgatewayapi_grouptiercreate.md "GroupTierCreate") [](imtgatewayapi_groupunsubscribe.md "GroupUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::GroupSubscribe
Subscribe to events and hooks associated with the groups configuration.
C++
MTAPIRES IMTGatewayAPI::GroupSubscribe( IMTConGroupSink* sink // A pointer to the IMTConGroupSink object )  
---  
.NET
MTRetCode CIMTGatewayAPI.GroupSubscribe( CIMTConGroupSink sink // CIMTConGroupSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConGroupSink](imtcongroupsink.md "IMTConGroupSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTConGroupSink](imtcongroupsink.md "IMTConGroupSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
\The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTGatewayAPI::GroupUnsubscribe](imtgatewayapi_groupunsubscribe.md "GroupUnsubscribe") or until the plugin is deleted.