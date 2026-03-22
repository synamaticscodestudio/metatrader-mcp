# VPSGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ VPS ](imtadminapi_config_vps.md "VPS")/ VPSGet | [](imtadminapi_vpsunsubscribe.md "VPSUnsubscribe") [](imtadminapi_vpsset.md "VPSSet") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::VPSGet
Get VPS sponsorship settings.
C++
MTAPIRES IMTAdminAPI::VPSGet( IMTConVPS* config // VPS settings object )  
---  
.NET
MTRetCode CIMTAdminAPI.VPSGet( CIMTConVPS config // VPS settings object )  
---  
Python
AdminAPI.VPSGet()  
---  
Parameters
config
[out] Settings object [IMTConVPS](imtconvps.md "IMTConVPS"). The 'config' object must be previously created using the [IMTAdminAPI::VPSCreate](imtadminapi_vpscreate.md "VPSCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.