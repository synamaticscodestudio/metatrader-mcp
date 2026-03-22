# VPSCreateRule (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ VPS ](serverapi_vps.md "VPS")/ VPSCreateRule | [](imtserverapi_vpscreate.md "VPSCreate") [](imtserverapi_vpscreatecondition.md "VPSCreateCondition") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::VPSCreateRule
Create a VPS allocation rule object.
IMTConVPSRule* IMTServerAPI::VPSCreateRule()  
---  
Return Value
The method returns a pointer to the created object that implements the [IMTConVPSRule](imtconvpsrule.md "IMTConVPSRule") interface. NULL is returned on failure.
Note
The created object must be destroyed by calling the [IMTConVPSRule::Release](imtconvpsrule_release.md "Release") method of this object.