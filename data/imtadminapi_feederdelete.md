# FeederDelete (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Data Feeds ](imtadminapi_config_datafeed.md "Functions")/ FeederDelete | [](imtadminapi_feederupdatebatch.md "FeederUpdateBatch") [](imtadminapi_feederdeletebatch.md "FeederDeleteBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::FeederDelete
Delete a configuration of a data feed by its name.
C++
MTAPIRES IMTAdminAPI::FeederDelete( LPCWSTR name // Name of the configuration )  
---  
.NET
MTRetCode CIMTAdminAPI.FeederDelete( string name // Name of the configuration )  
---  
Python
AdminAPI.FeederDelete( name # Name of the configuration )  
---  
Parameters
name
[in] The name of the configuration to delete.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can be deleted only from the applications that run on the main server. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.
IMTAdminAPI::FeederDelete
Delete a configuration of a data feed by its index.
C++
MTAPIRES IMTAdminAPI::FeederDelete( const UINT pos // Position of the configuration )  
---  
.NET
MTRetCode CIMTAdminAPI.FeederDelete( uint pos // Position of the configuration )  
---  
Python
AdminAPI.FeederDelete( pos # Position of the configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can be deleted only from the applications that run on the main server. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.