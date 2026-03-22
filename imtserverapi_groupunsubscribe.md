# GroupUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Groups ](serverapi_config_group.md "Groups")/ GroupUnsubscribe | [](imtserverapi_groupsubscribe.md "GroupSubscribe") [](imtserverapi_groupadd.md "GroupAdd") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::GroupUnsubscribe
Unsubscribe from events and hooks associated with the groups configuration.
MTAPIRES IMTServerAPI::GroupUnsubscribe( IMTConGroupSink* sink // A pointer to the IMTConGroupSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConGroupSink](imtcongroupsink.md "IMTConGroupSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTServerAPI::GroupSubscribe](imtserverapi_groupsubscribe.md "GroupSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.