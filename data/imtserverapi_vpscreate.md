# VPSCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ VPS ](serverapi_vps.md "VPS")/ VPSCreate | [](serverapi_vps.md "VPS") [](imtserverapi_vpscreaterule.md "VPSCreateRule") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::VPSCreate
Create the VPS sponsorship settings object.
IMTConVPS* IMTServerAPI::VPSCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConVPS](imtconvps.md "IMTConVPS") interface. In case of failure, it returns NULL.
Note
The created object should be destroyed by calling the [IMTConVPS::Release](imtconvps_release.md "Release") method of this object.