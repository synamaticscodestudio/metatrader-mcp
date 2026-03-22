# VPSSubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ VPS ](imtadminapi_config_vps.md "VPS")/ VPSSubscribe | [](imtadminapi_vpscreategroup.md "VPSCreateGroup") [](imtadminapi_vpsunsubscribe.md "VPSUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::VPSSubscribe
Subscribe to events and hooks associated with changes in the VPS sponsorship settings.
C++
MTAPIRES IMTAdminAPI::VPSSubscribe( IMTConVPSSink* sink // the pointer to the IMTConVPSSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.VPSSubscribe( CIMTConVPSSink sink // CIMTConVPSSink object )  
---  
VPSSubscribe
AdminAPI.VPSSubscribe( sink # IMTConVPSSink object )  
---  
Parameters
sink
[in] The pointer to the object that implements the [IMTConVPSSink](imtconvpssink.md "IMTConVPSSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. The same [IMTConVPSSink](imtconvpssink.md "IMTConVPSSink") interface cannot subscribe to an event twice. The [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") response code is returned in this case.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTServerAPI::VPSUnsubscribe](imtserverapi_vpsunsubscribe.md "VPSUnsubscribe") or until the plugin is deleted.