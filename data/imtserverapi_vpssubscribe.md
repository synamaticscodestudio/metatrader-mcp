# VPSSubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ VPS ](serverapi_vps.md "VPS")/ VPSSubscribe | [](imtserverapi_vpscreategroup.md "VPSCreateGroup") [](imtserverapi_vpsunsubscribe.md "VPSUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::VPSSubscribe
Subscribe to events and hooks associated with changes in the VPS sponsorship settings.
MTAPIRES IMTServerAPI::VPSSubscribe( IMTConVPSSink* sink // the pointer to the IMTConVPSSink object )  
---  
Parameters
sink
[in] The pointer to the object that implements the [IMTConVPSSink](imtconvpssink.md "IMTConVPSSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. The same [IMTConVPSSink](imtconvpssink.md "IMTConVPSSink") interface cannot subscribe to an event twice. The [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") response code is returned in this case.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTServerAPI::VPSUnsubscribe](imtserverapi_vpsunsubscribe.md "VPSUnsubscribe") or until the plugin is deleted.