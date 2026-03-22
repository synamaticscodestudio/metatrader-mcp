# FeederModuleNext (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Data Feeds ](imtadminapi_config_datafeed.md "Functions")/ FeederModuleNext | [](imtadminapi_feedermoduletotal.md "FeederModuleTotal") [](imtadminapi_feedermoduleget.md "FeederModuleGet") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::FeederModuleNext
Get the configuration of the data feed module by the index.
C++
MTAPIRES IMTAdminAPI::FeederModuleNext( const UINT pos, // Position of the configuration IMTConFeederModule* module // The object of data feed configuration )  
---  
.NET
MTRetCode CIMTAdminAPI.FeederModuleNext( uint pos, // Position of the configuration CIMTConFeederModule module // The object of data feed configuration )  
---  
Python
AdminAPI.FeederModuleNext( pos # Position of the configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
module
[out] The object of configuration of a data feed. The module object must be first created using the [IMTAdminAPI::FeederModuleCreate](imtadminapi_feedermodulecreate.md "FeederModuleCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration of a data feed module with a specified index to the module object.