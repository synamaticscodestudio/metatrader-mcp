# FeederGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Data Feeds ](serverapi_config_datafeeds.md "Data Feeds")/ FeederGet | [](imtserverapi_feedernext.md "FeederNext") [](imtserverapi_feedermoduletotal.md "FeederModuleTotal") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::FeederGet
Gets the data feed configuration based on its name.
MTAPIRES IMTServerAPI::FeederGet( LPCWSTR name, // Name of the configuration IMTConFeeder* feeder // The object of data feed configuration )  
---  
Parameters
name
[in] The name of the configuration.
feeder
[out] The object of configuration of a data feed. The feeder object must be first created using the [IMTServerAPI::FeederCreate](imtserverapi_feedercreate.md "FeederCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConFeeder::Name()](imtconfeeder_name.md "Name") value is used as the name.