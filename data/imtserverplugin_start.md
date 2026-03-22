# Start (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Plugin Interface ](imtserverplugin.md "Plugin Interface")/ Start | [](imtserverplugin_release.md "Release") [](imtserverplugin_stop.md "Stop") |
| --- | --- | --- |
| --- | --- |

IMTServerPlugin::Start
This method is called by the server during the plugin start.
MTAPIRES IMTServerPlugin::Start( IMTServerAPI* server // Pointer to the API interface )  
---  
Parameters
server
[in] Pointer to the interface of the Server API.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. If the return code is different from MT_RET_OK, the plugin will not be loaded, and its object will be destroyed.
Note
A plugin starts processing of [events](serverapi_simpleplugin.htm#events) only after the Start method is executed.
If the method returns an error, the [plugin configuration](serverapi_configure_plugin.md "Configuration of Plugins") is not disabled. In case of any change in the settings of this or other plugins, the server will try to reinitialize it, i.e. will call its Start method again.