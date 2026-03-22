# FeederNext (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Data Feeds ](imtreportapi_config_datafeed.md "Functions")/ FeederNext | [](imtreportapi_feedertotal.md "FeederTotal") [](imtreportapi_feederget.md "FeederGet") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::FeederNext
Gets a data feed configuration based on its index.
MTAPIRES IMTReportAPI::FeederNext( const UINT pos, // Position of the configuration IMTConFeeder* feeder // The object of data feed configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
feeder
[out] The object of configuration of a data feed. The feeder object must be first created using the [IMTReportAPI::FeederCreate](imtreportapi_feedercreate.md "FeederCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of a feed with a specified index to the feeder object.