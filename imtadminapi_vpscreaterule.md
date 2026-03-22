# VPSCreateRule (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ VPS ](imtadminapi_config_vps.md "VPS")/ VPSCreateRule | [](imtadminapi_vpscreate.md "VPSCreate") [](imtadminapi_vpscreatecondition.md "VPSCreateCondition") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::VPSCreateRule
Create a VPS allocation rule object.
C++
IMTConVPSRule* IMTAdminAPI::VPSCreateRule()  
---  
.NET
CIMTConVPSRule CIMTAdminAPI.VPSCreateRule()  
---  
Return Value
The method returns a pointer to the created object that implements the [IMTConVPSRule](imtconvpsrule.md "IMTConVPSRule") interface. NULL is returned on failure.
Note
The created object must be destroyed by calling the [IMTConVPSRule::Release](imtconvpsrule_release.md "Release") method of this object.