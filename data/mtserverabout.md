# MTServerAbout (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Entry Points ](reference_entrypoints.md "Entry Points")/ MTServerAbout | [](reference_entrypoints.md "Entry Points") [](mtservercreate.md "MTServerCreate") |
| --- | --- | --- |
| --- | --- |

MTServerAbout
The MTServerCreateAbout entry point provides the server with the initial information about the plugin.
MTAPIENTRY MTAPIRES MTServerAbout( MTPluginInfo& info // Reference to MTPluginInfo )  
---  
Parameters
info
[out] A reference to the [MTPluginInfo](mtplugininfo.md "MTPluginInfo") structure.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. If the return code is different from MT_RET_OK, the plug will not appear in the list of modules.
Note
The plugin must correctly fill in the [MTPluginInfo](mtplugininfo.md "MTPluginInfo") structure.