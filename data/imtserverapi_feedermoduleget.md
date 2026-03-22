# FeederModuleGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Data Feeds ](serverapi_config_datafeeds.md "Data Feeds")/ FeederModuleGet | [](imtserverapi_feedermodulenext.md "FeederModuleNext") [](imtserverapi_feederrestart.md "FeederRestart") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::FeederModuleGet
Get the configuration of the data feed module by the name.
MTAPIRES IMTServerAPI::FeederModuleGet( LPCWSTR name, // Name of the configuration IMTConFeederModule* module // Object of configuration of a data feed module )  
---  
Parameters
name
[in] The name of the configuration.
module
[out] The object of configuration of the data feed module. The module object must be first created using the [IMTServerAPI::FeederModuleCreate](imtserverapi_feedermodulecreate.md "FeederModuleCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConFeederModule::Module()](imtconfeedermodule_module.md "Module") value is used as the name.