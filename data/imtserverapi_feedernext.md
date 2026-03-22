# FeederNext (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Data Feeds ](serverapi_config_datafeeds.md "Data Feeds")/ FeederNext | [](imtserverapi_feedertotal.md "FeederTotal") [](imtserverapi_feederget.md "FeederGet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::FeederNext
Gets a data feed configuration based on its index.
MTAPIRES IMTServerAPI::FeederNext( const UINT pos, // Position of the configuration IMTConFeeder* feeder // The object of data feed configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
feeder
[out] The object of configuration of a data feed. The feeder object must be first created using the [IMTServerAPI::FeederCreate](imtserverapi_feedercreate.md "FeederCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of a feed with a specified index to the feeder object.