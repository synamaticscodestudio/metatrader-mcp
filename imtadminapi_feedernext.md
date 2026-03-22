# FeederNext (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Data Feeds ](imtadminapi_config_datafeed.md "Functions")/ FeederNext | [](imtadminapi_feedertotal.md "FeederTotal") [](imtadminapi_feederget.md "FeederGet") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::FeederNext
Gets a data feed configuration based on its index.
C++
MTAPIRES IMTAdminAPI::FeederNext( const UINT pos, // Position of the configuration IMTConFeeder* feeder // The object of data feed configuration )  
---  
.NET
MTRetCode CIMTAdminAPI.FeederNext( uint pos, // Position of the configuration CIMTConFeeder feeder // Position of the configuration )  
---  
Python
AdminAPI.FeederNext( pos # Position of the configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
feeder
[out] The object of configuration of a data feed. The feeder object must be first created using the [IMTAdminAPI::FeederCreate](imtadminapi_feedercreate.md "FeederCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of a feed with a specified index to the feeder object.