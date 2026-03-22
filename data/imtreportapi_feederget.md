# FeederGet (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Data Feeds ](imtreportapi_config_datafeed.md "Functions")/ FeederGet | [](imtreportapi_feedernext.md "FeederNext") [](imtreportapi_feedermoduletotal.md "FeederModuleTotal") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::FeederGet
Gets the data feed configuration based on its name.
MTAPIRES IMTReportAPI::FeederGet( LPCWSTR name, // Name of the configuration IMTConFeeder* feeder // The object of data feed configuration )  
---  
Parameters
name
[in] The name of the configuration.
feeder
[out] The object of configuration of a data feed. The feeder object must be first created using the [IMTReportAPI::FeederCreate](imtreportapi_feedercreate.md "FeederCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConFeeder::Name()](imtconfeeder_name.md "Name") value is used as the name.