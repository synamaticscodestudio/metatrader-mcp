# GroupSubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Groups ](serverapi_config_group.md "Groups")/ GroupSubscribe | [](imtserverapi_grouptiercreate.md "GroupTierCreate") [](imtserverapi_groupunsubscribe.md "GroupUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::GroupSubscribe
Subscribe to events and hooks associated with the groups configuration.
MTAPIRES IMTServerAPI::GroupSubscribe( IMTConGroupSink* sink // A pointer to the IMTConGroupSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConGroupSink](imtcongroupsink.md "IMTConGroupSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTConGroupSink](imtcongroupsink.md "IMTConGroupSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTServerAPI::GroupUnsubscribe](imtserverapi_groupunsubscribe.md "GroupUnsubscribe") or until the plugin is deleted.