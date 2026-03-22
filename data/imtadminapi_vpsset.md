# VPSSet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ VPS ](imtadminapi_config_vps.md "VPS")/ VPSSet | [](imtadminapi_vpsget.md "VPSGet") [](imtadminapi_config_kyc.md "KYC") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::VPSSet
Update VPS sponsorship settings.
C++
MTAPIRES IMTAdminAPI::VPSSet( IMTConVPS* config // VPS settings object )  
---  
.NET
MTRetCode CIMTAdminAPI.VPSSet( CIMTConVPS config // VPS settings object )  
---  
Python
AdminAPI.VPSSet( config  # VPS settings object )  
---  
Parameters
config
[in] Settings object [IMTConVPS](imtconvps.md "IMTConVPS").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.