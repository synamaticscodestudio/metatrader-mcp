# FeederModuleNext (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Data Feeds ](serverapi_config_datafeeds.md "Data Feeds")/ FeederModuleNext | [](imtserverapi_feedermoduletotal.md "FeederModuleTotal") [](imtserverapi_feedermoduleget.md "FeederModuleGet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::FeederModuleNext
Get the configuration of the data feed module by the index.
MTAPIRES IMTServerAPI::FeederModuleNext( const UINT pos, // Position of the configuration IMTConFeederModule* module // The object of data feed configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
module
[out] The object of configuration of a data feed. The module object must be first created using the [IMTServerAPI::FeederModuleCreate](imtserverapi_feedermodulecreate.md "FeederModuleCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration of a data feed module with a specified index to the module object.