# PluginGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Plugins ](imtadminapi_config_plugin.md "Functions")/ PluginGet | [](imtadminapi_pluginnext.md "PluginNext") [](imtadminapi_pluginmoduletotal.md "PluginModuleTotal") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::PluginGet
Get the plugin configuration by the name.
C++
MTAPIRES IMTAdminAPI::PluginGet( const UINT64 server_id, // Server ID LPCWSTR name, // Plugin configuration name IMTConPlugin* plugin // An object of a plugin configuration )  
---  
.NET
MTRetCode CIMTAdminAPI.PluginGet( ulong server_id, // Server ID string name, // Plugin configuration name CIMTConPlugin plugin // An object of a plugin configuration )  
---  
Python
AdminAPI.PluginGet( server_id, # Server ID name # Plugin configuration name )  
---  
Parameters
server_id
[in] The identifier of the server for which we get the plugin configuration. The [IMTConServer::Id](imtconserver_id.md "Id") value is used as the identifier.
name
[in] Name of the plugin configuration. The [IMTConPlugin::Name](imtconplugin_name.md "Name") value is used as the name.
plugin
[out] An object of plugin configuration. The object must first be created using the [IMTAdminAPI::PluginCreate](imtadminapi_plugincreate.md "PluginCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies parameters of the specified plugin configuration to the plugin object.