# VPSCreateCondition (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ VPS ](serverapi_vps.md "VPS")/ VPSCreateCondition | [](imtserverapi_vpscreaterule.md "VPSCreateRule") [](imtserverapi_vpscreategroup.md "VPSCreateGroup") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::VPSCreateCondition
Create a condition object for the VPS allocation rule.
IMTConVPSCondition* IMTServerAPI::VPSCreateCondition()  
---  
Return Value
The method returns a pointer to the created object that implements the [IMTConVPSCondition](imtconvpscondition.md "IMTConVPSCondition") interface. NULL is returned on failure.
Note
The created object must be destroyed by calling the [IMTConVPSCondition::Release](imtconvpscondition_release.md "Release") method of this object.