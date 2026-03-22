# VPSCreateCondition (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ VPS ](imtadminapi_config_vps.md "VPS")/ VPSCreateCondition | [](imtadminapi_vpscreaterule.md "VPSCreateRule") [](imtadminapi_vpscreategroup.md "VPSCreateGroup") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::VPSCreateCondition
Create a condition object for the VPS allocation rule.
C++
IMTConVPSCondition* IMTAdminAPI::VPSCreateCondition()  
---  
.NET
CIMTConVPSCondition CIMTAdminAPI.VPSCreateCondition()  
---  
Return Value
The method returns a pointer to the created object that implements the [IMTConVPSCondition](imtconvpscondition.md "IMTConVPSCondition") interface. NULL is returned on failure.
Note
The created object must be destroyed by calling the [IMTConVPSCondition::Release](imtconvpscondition_release.md "Release") method of this object.