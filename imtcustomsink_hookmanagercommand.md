# HookManagerCommand (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Interface of Custom Events ](imtcustomsink.md "Custom Events Interface")/ HookManagerCommand | [](imtcustomsink.md "Custom Events Interface") [](imtcustomsink_hookwebapicommand.md "HookWebAPICommand") |
| --- | --- | --- |
| --- | --- |

IMTCustomSink::HookManagerCommand
A hook of an event of execution of a [manager's](imtmanagerapi_custom.md "Custom Functions") or [administrator's custom command](imtadminapi_custom.md "Custom Functions").
MTAPIRES IMTCustomSink::HookManagerCommand( LPCWSTR ip, // Manager's IP address const IMTConManager* manager, // An object of the manager configuration LPCVOID indata, // Input data const UINT indata_len, // Size of input data LPVOID& outdata, // Output data UINT& outdata_len // Size of output data )  
---  
Parameters
ip
[in] The IP address of the manager who has sent the custom command.
manager
[in] An object of configuration of the manager who has sent the custom command.
indata
[in] Data transmitted to the server.
indata_len
[in] Size of transmitted data in bytes.
outdata
[out] A pointer to the data returned in response to the command. For the data returned you need to preliminary allocate the memory using the [IMTServerAPI::Allocate](imtserverapi_allocate.md "Allocate") method.
outdata_len
[out] A pointer to the size of data returned in response to the command.
Return Value
If the hook does not handle the event, it returns [MT_RET_OK_NONE](retcodes_successful.md "Successful completion"). If the event is handled, the return code is forwarded to the Manager API together with the outdata buffer.
Note
The hook is called consistently in accordance with the order of plugins in the list until the first plugin that has returned a response code other than [MT_RET_OK_NONE](retcodes_successful.md "Successful completion").
This type of HookManagerCommand should only be used when working with small data volumes. If the data volume exceeds 64 KB, the second form of the hook described below is called. If the data volume is within acceptable limits, the first form is called first, and then the second one is called.
IMTCustomSink::HookManagerCommand
A hook of an event of execution of a [manager's](imtmanagerapi_custom.md "Custom Functions") or [administrator's custom command](imtadminapi_custom.md "Custom Functions").
MTAPIRES IMTCustomSink::HookManagerCommand( const UINT64 session, // Session identifier LPCWSTR ip, // Manager's IP address const IMTConManager* manager, // An object of the manager configuration IMTByteStream* indata, // Input data IMTByteStream* outdata, // Output data )  
---  
Parameters
session
[in] Identifier of the session of the manager connection.
ip
[in] The IP address of the manager who has sent the custom command.
manager
[in] An object of configuration of the manager who has sent the custom command.
indata
[in] [The object of the data stream](imtbytestream.md "IMTByteStream") sent to the server.
outdata
[out] A pointer to the [object of the data stream](imtbytestream.md "IMTByteStream") returned in response to the command.
Return Value
If the hook does not handle the event, it returns [MT_RET_OK_NONE](retcodes_successful.md "Successful completion"). If the event is handled, the return code is forwarded to the Manager API together with the outdata buffer.
Note
The hook is called consistently in accordance with the order of plugins in the list until the first plugin that has returned a response code other than [MT_RET_OK_NONE](retcodes_successful.md "Successful completion").
This type of HookManagerCommand should be used when working with large data volumes. If the data volume is less than 64 KB, you may use the first form of the hook described above. If the data volume is within acceptable limits, the first form is called first, and then the second one is called.