# CommonSet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Common ](serverapi_config_common.md "Common")/ CommonSet | [](imtserverapi_commonget.md "CommonGet") [](serverapi_config_network.md "Network") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::CommonSet
Sets the common platform configuration.
MTAPIRES IMTServerAPI::CommonSet( const IMTConCommon* common // An object of configuration )  
---  
Parameters
common
[in] An object of the common configuration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
When setting a configuration, a check is made whether changes are added. If there are no changes, no update is made and therefore the [IMTConCommonSink::OnCommonUpdate](imtconcommonsink_oncommonupdate.md "OnCommonUpdate") notification method is not called.