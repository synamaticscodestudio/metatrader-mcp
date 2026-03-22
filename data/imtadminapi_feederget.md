# FeederGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Data Feeds ](imtadminapi_config_datafeed.md "Functions")/ FeederGet | [](imtadminapi_feedernext.md "FeederNext") [](imtadminapi_feedermoduletotal.md "FeederModuleTotal") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::FeederGet
Gets the data feed configuration based on its name.
C++
MTAPIRES IMTAdminAPI::FeederGet( LPCWSTR name, // Name of the configuration IMTConFeeder* feeder // The object of data feed configuration )  
---  
.NET
MTRetCode CIMTAdminAPI.FeederGet( string name, // Name of the configuration CIMTConFeeder feeder // The object of data feed configuration )  
---  
Python
AdminAPI.FeederGet( name # Name of the configuration )  
---  
Parameters
name
[in] The name of the configuration.
feeder
[out] The object of configuration of a data feed. The feeder object must be first created using the [IMTAdminAPI::FeederCreate](imtadminapi_feedercreate.md "FeederCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConFeeder::Name()](imtconfeeder_name.md "Name") value is used as the name.