# FeederModuleGet (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Data Feeds ](imtreportapi_config_datafeed.md "Functions")/ FeederModuleGet | [](imtreportapi_feedermodulenext.md "FeederModuleNext") [](imtreportapi_config_time.md "Time") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::FeederModuleGet
Get the configuration of the data feed module by the name.
MTAPIRES IMTReportAPI::FeederModuleGet( LPCWSTR name, // Name of the configuration IMTConFeederModule* module // Object of configuration of a data feed module )  
---  
Parameters
name
[in] The name of the configuration.
module
[out] The object of configuration of the data feed module. The module object must be first created using the [IMTReportAPI::FeederModuleCreate](imtreportapi_feedermodulecreate.md "FeederModuleCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConFeederModule::Module()](imtconfeedermodule_module.md "Module") value is used as the name.