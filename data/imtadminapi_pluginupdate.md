# PluginUpdate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Plugins ](imtadminapi_config_plugin.md "Functions")/ PluginUpdate | [](imtadminapi_pluginunsubscribe.md "PluginUnsubscribe") [](imtadminapi_pluginupdatebatch.md "PluginUpdateBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::PluginUpdate
Add and update a plugin configuration.
C++
MTAPIRES IMTAdminAPI::PluginUpdate( IMTConPlugin* plugin // An object of a plugin configuration )  
---  
.NET
MTRetCode CIMTAdminAPI.PluginUpdate( CIMTConPlugin plugin // An object of a plugin configuration )  
---  
Python
AdminAPI.PluginUpdate( plugin # An object of a plugin configuration )  
---  
Parameters
plugin
[in] An object of plugin configuration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can be added or updated only from the applications that run on the main server. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.
Before adding, the correctness of the record is checked. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.