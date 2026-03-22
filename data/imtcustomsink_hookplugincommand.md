# HookPluginCommand (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Interface of Custom Events ](imtcustomsink.md "Custom Events Interface")/ HookPluginCommand | [](imtcustomsink_hookwebapicommand.md "HookWebAPICommand") [](imttradesink.md "Interface of Trade Events") |
| --- | --- | --- |
| --- | --- |

IMTCustomSink::HookPluginCommand
Hook for the execution of a [custom command](imtserverapi_customcommand.md "CustomCommand") transmitted by the plugin from another server within the cluster.
MTAPIRES IMTCustomSink::HookPluginCommand( const IMTConPlugin* manager, // plugin configuration object IMTByteStream* indata, // input data IMTByteStream* outdata, // output data )  
---  
Parameters
manager
[in] The [IMTConPlugin](imtconplugin.md "IMTConPlugin") object describing the configuration the plugin that sent the custom command.
indata
[in] [Object of the data stream](imtbytestream.md "IMTByteStream") transmitted to the server.
outdata
[out] A pointer to the [object of the data stream](imtbytestream.md "IMTByteStream") returned in response to the command.
Return Value
If the hook does not handle the event, it returns [MT_RET_OK_NONE](retcodes_successful.md "Successful completion"). If the event is processed, the returned response code is sent along with the 'outdata' buffer to the plugin that called the custom command.
Note
The hook is called sequentially, following the order of the plugins in the list, until it reaches the plugin that returns a response code other than [MT_RET_OK_NONE](retcodes_successful.md "Successful completion").