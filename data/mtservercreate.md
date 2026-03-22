# MTServerCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Entry Points ](reference_entrypoints.md "Entry Points")/ MTServerCreate | [](mtserverabout.md "MTServerAbout") [](imtserverplugin.md "Plugin Interface") |
| --- | --- | --- |
| --- | --- |

MTServerCreate
The MTServerCreate Entry Point. This method is called by the server to create an instance of an object of the server plugin that implements the [IMTServerPlugin](imtserverplugin.md "Plugin Interface") interface.
MTAPIENTRY MTAPIRES MTServerCreate( UINT apiversion, // API Version IMTServerPlugin** plugin // Pointer to a pointer to the plugin )  
---  
Parameters
apiversion
[in] The current version of the Server API supported by the server is passed in this parameter.
plugin
[out] A pointer to a pointer to the plugin. The created instance of the server plugin should be placed in this parameter.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, corresponding to the response code.