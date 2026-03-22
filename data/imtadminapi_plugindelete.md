# PluginDelete (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Plugins ](imtadminapi_config_plugin.md "Functions")/ PluginDelete | [](imtadminapi_pluginupdatebatch.md "PluginUpdateBatch") [](imtadminapi_plugindeletebatch.md "PluginDeleteBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::PluginDelete
Delete a plugin configuration by the name.
C++
MTAPIRES IMTAdminAPI::PluginDelete( const UINT64 server_id, // Server ID LPCWSTR name // Plugin configuration name )  
---  
.NET
MTRetCode CIMTAdminAPI.PluginDelete( ulong server_id, // Server ID string name // Plugin configuration name )  
---  
Python
AdminAPI.PluginDelete( server_id, # Server ID name # Plugin configuration name )  
---  
Parameters
server_id
[in] The identifier of the server for which we delete the plugin configuration. The [IMTConServer::Id](imtconserver_id.md "Id") value is used as the identifier.
name
[in] Name of the plugin configuration. The [IMTConPlugin::Name](imtconplugin_name.md "Name") value is used as the name.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can be deleted only when connecting to the main server. In all other cases the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.
IMTAdminAPI::PluginDelete
Deleting a plugin configuration by the index.
C++
MTAPIRES IMTAdminAPI::PluginDelete( const UINT pos // Position of the configuration )  
---  
.NET
MTRetCode CIMTAdminAPI.PluginDelete( uint  pos // Position of the configuration )  
---  
Python
AdminAPI.PluginDelete( pos # Position of the configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can be deleted only from the applications that run on the main server. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.