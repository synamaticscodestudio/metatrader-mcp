# VPSCreateGroup (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ VPS ](serverapi_vps.md "VPS")/ VPSCreateGroup | [](imtserverapi_vpscreatecondition.md "VPSCreateCondition") [](imtserverapi_vpssubscribe.md "VPSSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::VPSCreateGroup
Create an entry object in the list of groups for which the Sponsored VPS is allowed.
IMTConVPS* IMTServerAPI::VPSCreateGroup()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConVPSGroup](imtconvpsgroup.md "IMTConVPSGroup") interface. In case of failure, it returns NULL.
Note
The created object should be destroyed by calling the [IMTConVPSGroup::Release](imtconvpsgroup_release.md "Release") method of this object.