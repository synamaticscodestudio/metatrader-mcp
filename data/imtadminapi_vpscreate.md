# VPSCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ VPS ](imtadminapi_config_vps.md "VPS")/ VPSCreate | [](imtadminapi_config_vps.md "VPS") [](imtadminapi_vpscreaterule.md "VPSCreateRule") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::VPSCreate
Create the VPS sponsorship settings object.
C++
IMTConVPS* IMTAdminAPI::VPSCreate()  
---  
.NET
CIMTConVPS CIMTAdminAPI.VPSCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConVPS](imtconvps.md "IMTConVPS") interface. In case of failure, it returns NULL.
Note
The created object should be destroyed by calling the [IMTConVPS::Release](imtconvps_release.md "Release") method of this object.