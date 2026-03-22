# CommonGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Common ](serverapi_config_common.md "Common")/ CommonGet | [](imtserverapi_commonunsubscribe.md "CommonUnsubscribe") [](imtserverapi_commonset.md "CommonSet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::CommonGet
Gets the common platform configuration.
MTAPIRES IMTServerAPI::CommonGet( IMTConCommon* common // An object of configuration )  
---  
Parameters
common
[out] An object of the common configuration. The object must first be created using the [IMTServerAPI::CommonCreate](imtserverapi_commoncreate.md "CommonCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.