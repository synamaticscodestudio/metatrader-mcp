# VPSCreateGroup (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ VPS ](imtadminapi_config_vps.md "VPS")/ VPSCreateGroup | [](imtadminapi_vpscreatecondition.md "VPSCreateCondition") [](imtadminapi_vpssubscribe.md "VPSSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::VPSCreateGroup
Create an entry object in the list of groups for which the Sponsored VPS is allowed.
C++
IMTConVPS* IMTAdminAPI::VPSCreateGroup()  
---  
.NET
CIMTConVPS CIMTAdminAPI.VPSCreateGroup()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConVPSGroup](imtconvpsgroup.md "IMTConVPSGroup") interface. In case of failure, it returns NULL.
Note
The created object should be destroyed by calling the [IMTConVPSGroup::Release](imtconvpsgroup_release.md "Release") method of this object.