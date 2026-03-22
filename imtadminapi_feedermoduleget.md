# FeederModuleGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Data Feeds ](imtadminapi_config_datafeed.md "Functions")/ FeederModuleGet | [](imtadminapi_feedermodulenext.md "FeederModuleNext") [](imtadminapi_config_time.md "Functions") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::FeederModuleGet
Get the configuration of the data feed module by the name.
C++
MTAPIRES IMTAdminAPI::FeederModuleGet( LPCWSTR name, // Name of the configuration IMTConFeederModule* module // Object of configuration of a data feed module )  
---  
.NET
MTRetCode CIMTAdminAPI.FeederModuleGet( string name, // Name of the configuration CIMTConFeederModule module // Object of configuration of a data feed module )  
---  
Python
AdminAPI.FeederModuleGet( name # Name of the configuration )  
---  
Parameters
name
[in] The name of the configuration.
module
[out] The object of configuration of the data feed module. The module object must be first created using the [IMTAdminAPI::FeederModuleCreate](imtadminapi_feedermodulecreate.md "FeederModuleCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConFeederModule::Module()](imtconfeedermodule_module.md "Module") value is used as the name.