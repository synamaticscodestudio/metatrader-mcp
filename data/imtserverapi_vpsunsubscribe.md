# VPSUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ VPS ](serverapi_vps.md "VPS")/ VPSUnsubscribe | [](imtserverapi_vpssubscribe.md "VPSSubscribe") [](imtserverapi_vpsget.md "VPSGet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::VPSUnsubscribe
Unsubscribe from events and hooks associated with changes in the VPS sponsorship settings.
MTAPIRES IMTServerAPI::VPSUnsubscribe( IMTConVPSSink* sink // the pointer to the IMTConVPSSink object )  
---  
Parameters
sink
[in] The pointer to the object that implements the [IMTConVPSSink](imtconvpssink.md "IMTConVPSSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTServerAPI::VPSSubscribe](imtserverapi_vpssubscribe.md "VPSSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.