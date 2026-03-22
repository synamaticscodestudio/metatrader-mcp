# Stop (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Plugin Interface ](imtserverplugin.md "Plugin Interface")/ Stop | [](imtserverplugin_start.md "Start") [](imtserverapi.md "Main API Interface") |
| --- | --- | --- |
| --- | --- |

IMTServerPlugin::Stop
This method is called by the server before stopping and removing the plugin.
MTAPIRES IMTServerPlugin::Stop()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
By the time of call of the IMTServerPlugin::Stop method, the plugin automatically unsubscribes from all of the events to which it subscribed earlier. Thus you will get the [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error if you try to unsubscribe from an event within the implementation of the Stop method.