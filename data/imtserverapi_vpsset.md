# VPSSet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ VPS ](serverapi_vps.md "VPS")/ VPSSet | [](imtserverapi_vpsget.md "VPSGet") [](serverapi_kyc.md "KYC") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::VPSSet
Update VPS sponsorship settings.
MTAPIRES IMTServerAPI::VPSSet( const IMTConVPS* config // VPS settings object )  
---  
Parameters
config
[in] Settings object [IMTConVPS](imtconvps.md "IMTConVPS").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.