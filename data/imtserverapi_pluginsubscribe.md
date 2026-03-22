# PluginSubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Plugins ](serverapi_config_plugins.md "Plugins")/ PluginSubscribe | [](imtserverapi_pluginparamcreate.md "PluginParamCreate") [](imtserverapi_pluginunsubscribe.md "PluginUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::PluginSubscribe
Subscribe to events and hooks associated with the configuration of plugins.
MTAPIRES IMTServerAPI::PluginSubscribe( IMTConPluginSink* sink // A pointer to the IMTConPluginSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConPluginSink](imtconpluginsink.md "IMTConPluginSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTConPluginSink](imtconpluginsink.md "IMTConPluginSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTServerAPI::PluginUnsubscribe](imtserverapi_pluginunsubscribe.md "PluginUnsubscribe") or until the plugin is deleted.