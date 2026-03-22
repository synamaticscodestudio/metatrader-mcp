# PluginSubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Plugins ](imtadminapi_config_plugin.md "Functions")/ PluginSubscribe | [](imtadminapi_pluginparamcreate.md "PluginParamCreate") [](imtadminapi_pluginunsubscribe.md "PluginUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::PluginSubscribe
Subscribe to events associated with the configuration of plugins.
C++
MTAPIRES IMTAdminAPI::PluginSubscribe( IMTConPluginSink* sink // A pointer to the IMTConPluginSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.PluginSubscribe( CIMTConPluginSink sink // CIMTConPluginSink object )  
---  
Python
AdminAPI.PluginSubscribe( sink # IMTConPluginSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConPluginSink](imtconpluginsink.md "IMTConPluginSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTConPluginSink](imtconpluginsink.md "IMTConPluginSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
To receive [IMTConPluginSink::OnPluginSync](imtconpluginsink_onpluginsync.md "OnPluginSync") events, subscribe before calling the [IMTAdminAPI::Connect](imtadminapi_connect.md "Connect") method.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTAdminAPI::PluginUnsubscribe](imtadminapi_pluginunsubscribe.md "PluginUnsubscribe") or until the administrator interface is deleted using the [IMTAdminAPI::Release](imtadminapi_release.md "Release") method.