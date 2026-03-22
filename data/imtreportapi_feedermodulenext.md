# FeederModuleNext (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Data Feeds ](imtreportapi_config_datafeed.md "Functions")/ FeederModuleNext | [](imtreportapi_feedermoduletotal.md "FeederModuleTotal") [](imtreportapi_feedermoduleget.md "FeederModuleGet") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::FeederModuleNext
Get the configuration of the data feed module by the index.
MTAPIRES IMTReportAPI::FeederModuleNext( const UINT pos, // Position of the configuration IMTConFeederModule* module // The object of data feed configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
module
[out] The object of configuration of a data feed. The module object must be first created using the [IMTReportAPI::FeederModuleCreate](imtreportapi_feedermodulecreate.md "FeederModuleCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration of a data feed module with a specified index to the module object.