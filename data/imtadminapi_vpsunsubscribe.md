# VPSUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ VPS ](imtadminapi_config_vps.md "VPS")/ VPSUnsubscribe | [](imtadminapi_vpssubscribe.md "VPSSubscribe") [](imtadminapi_vpsget.md "VPSGet") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::VPSUnsubscribe
Unsubscribe from events and hooks associated with changes in the VPS sponsorship settings.
C++
MTAPIRES IMTAdminAPI::VPSUnsubscribe( IMTConVPSSink* sink // the pointer to the IMTConVPSSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.VPSUnsubscribe( CIMTConVPSSink sink // CIMTConVPSSink object )  
---  
Python
AdminAPI.VPSUnsubscribe( sink // IMTConVPSSink object )  
---  
Parameters
sink
[in] The pointer to the object that implements the [IMTConVPSSink](imtconvpssink.md "IMTConVPSSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTServerAPI::VPSSubscribe](imtserverapi_vpssubscribe.md "VPSSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.