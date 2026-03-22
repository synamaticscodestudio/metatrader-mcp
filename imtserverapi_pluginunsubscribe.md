# PluginUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Plugins ](serverapi_config_plugins.md "Plugins")/ PluginUnsubscribe | [](imtserverapi_pluginsubscribe.md "PluginSubscribe") [](imtserverapi_plugincurrent.md "PluginCurrent") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::PluginUnsubscribe
Unsubscribe from events and hooks associated with the configuration of plugins.
MTAPIRES IMTServerAPI::PluginUnsubscribe( IMTConPluginSink* sink // A pointer to the IMTConPluginSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConPluginSink](imtconpluginsink.md "IMTConPluginSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTServerAPI::PluginSubscribe](imtserverapi_pluginsubscribe.md "PluginSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.