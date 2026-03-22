# SpreadDelete (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Spreads ](imtadminapi_config_spread.md "Configuration of Spreads")/ SpreadDelete | [](imtadminapi_spreadupdatebatch.md "SpreadUpdateBatch") [](imtadminapi_spreaddeletebatch.md "SpreadDeleteBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SpreadDelete
Deleting a spread configuration by the index.
C++
MTAPIRES IMTAdminAPI::SpreadDelete( const UINT pos // Position of the configuration )  
---  
.NET
MTRetCode CIMTAdminAPI.SpreadDelete( uint pos // Position of the configuration )  
---  
Python
AdminAPI.SpreadDelete( pos # Position of the configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can be deleted only from the plugins that run on the main server. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.