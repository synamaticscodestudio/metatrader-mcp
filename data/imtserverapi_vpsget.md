# VPSGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ VPS ](serverapi_vps.md "VPS")/ VPSGet | [](imtserverapi_vpsunsubscribe.md "VPSUnsubscribe") [](imtserverapi_vpsset.md "VPSSet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::VPSGet
Get VPS sponsorship settings.
MTAPIRES IMTServerAPI::VPSGet( IMTConVPS* config // VPS settings object )  
---  
Parameters
config
[out] Settings object [IMTConVPS](imtconvps.md "IMTConVPS"). The 'config' object must be previously created using the [IMTServerAPI::MessengerCreate](imtserverapi_vpscreate.md "VPSCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.