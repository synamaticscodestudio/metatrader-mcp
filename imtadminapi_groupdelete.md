# GroupDelete (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Groups ](imtadminapi_config_group.md "Functions")/ GroupDelete | [](imtadminapi_groupupdatebatch.md "GroupUpdateBatch") [](imtadminapi_groupdeletebatch.md "GroupDeleteBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::GroupDelete
Delete a group configuration by the name.
C++
MTAPIRES IMTAdminAPI::GroupDelete( LPCWSTR name // Name of the configuration )  
---  
.NET
MTRetCode CIMTAdminAPI.GroupDelete( string name // Name of the configuration )  
---  
Python
AdminAPI.GroupDelete( name # Name of the configuration )  
---  
Parameters
name
[in] The name of the configuration to delete.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can be deleted only from the applications that run on the main server. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.
IMTAdminAPI::GroupDelete
Deletes a group configuration by the index.
C++
MTAPIRES IMTAdminAPI::GroupDelete( const UINT pos // Position of the configuration )  
---  
.NET
MTRetCode CIMTAdminAPI.GroupDelete( uint pos // Position of the configuration )  
---  
Python
AdminAPI.GroupDelete( pos # Position of the configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can be deleted only from the applications that run on the main server. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.