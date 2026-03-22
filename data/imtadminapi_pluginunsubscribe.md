# PluginUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Plugins ](imtadminapi_config_plugin.md "Functions")/ PluginUnsubscribe | [](imtadminapi_pluginsubscribe.md "PluginSubscribe") [](imtadminapi_pluginupdate.md "PluginUpdate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::PluginUnsubscribe
Unsubscribe from events associated with the configuration of plugins.
C++
MTAPIRES IMTAdminAPI::PluginUnsubscribe( IMTConPluginSink* sink // A pointer to the IMTConPluginSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.PluginUnsubscribe( CIMTConPluginSink sink // CIMTConPluginSink object )  
---  
Python
AdminAPI.PluginUnsubscribe( sink # IMTConPluginSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConPluginSink](imtconpluginsink.md "IMTConPluginSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTAdminAPI::PluginSubscribe](imtadminapi_pluginsubscribe.md "PluginSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.