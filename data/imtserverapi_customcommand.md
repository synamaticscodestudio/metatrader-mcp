# CustomCommand (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Custom Functions ](serverapi_custom.md "Custom Functions")/ CustomCommand | [](imtserverapi_customcreatestream.md "CustomCreateStream") [](imtserversink.md "Interface of Server Events") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::CustomCommand
A custom command can only be sent to another plugin running within the same cluster. Using this method, you can implement your own data exchange mechanism between the servers of your platform:
  * On one server, create a plugin that sends custom commands using IMTServerAPI::CustomCommand.
  * On the second server, create a plugin that processes commands using [IMTCustomSink::HookPluginCommand](imtcustomsink_hookplugincommand.md "HookPluginCommand").

This enables the transfer of any data between them. For example, from a plugin on the main trading server, you can request data on positions from a non-main trading server. Such a request cannot be implemented using standard means since each server uses its own databases. Accordingly, each plugin has access only to its specific database.
virtual MTAPIRES IMTServerAPI::CustomCommand( const UINT64 server_id, // server ID LPCVOID indata, // input data const UINT indata_len, // input data size LPVOID& outdata, // output data UINT& outdata_len // output data size )  
---  
Parameters
server_id
[in] The ID of the server to which the command is sent. Corresponds to [IMTConServer::Id](imtconserver_id.md "Id").
indata
[in] Data transmitted to the server.
indata_len
[in] Input data size in bytes.
outdata
[out] A reference to the data returned in response to the command. After use, the memory must be freed using [IMTServerAPI::Free](imtserverapi_free.md "Free").
outdata_len
[out] A reference to the output data size in bytes.
Return Value
The response code sent by the plugin that processed the custom command. If no plugin processed the command in 30 seconds, the response code [MT_RET_OK_NONE](retcodes_successful.md "Successful completion") will be returned. In case of an error in sending the command, an appropriate response code will be returned.
Note
To process a custom command, a plugin implementing the [IMTCustomSink::HookPluginCommand](imtcustomsink_hookplugincommand.md "HookPluginCommand") hook must be installed on the server.
You can send custom commands to plugins running on any servers within your cluster, including the server from which the command is sent.
The method is synchronous. Control is returned to the plugin only after the command processing is complete. Therefore, it is strongly recommended not to call the method from hooks and event handlers.
This function variant is recommended only for infrequent transmission of small amounts of data. The function variant described below is specifically adapted for transmitting large amounts of data.
Sending a large number of commands and a large volume of data can negatively impact the interaction speed between servers in the cluster, affecting the transmission of trading data, ticks, etc. This can be especially noticeable when sending commands between non-main trading servers. Since there is no direct connection between them, all interactions are routed through the main server.
IMTServerAPI::CustomCommand
Send a custom command to the server.
virtual MTAPIRES IMTServerAPI::CustomCommand( const UINT64 server_id, // server ID IMTByteStream* indata, // input data IMTByteStream* outdata, // output data )  
---  
Parameters
server_id
[in] The ID of the server to which the command is sent. Corresponds to [IMTConServer::Id](imtconserver_id.md "Id").
indata
[in] A pointer to the [data stream object](imtbytestream.md "IMTByteStream") transmitted to the server.
outdata
[out] A pointer to the [data steam object](imtbytestream.md "IMTByteStream") returned in response to the command.
Return Value
The response code sent by the plugin that processed the custom command. If no plugin processed the command, the response code [MT_RET_OK_NONE](retcodes_successful.md "Successful completion") will be returned. In case of an error in sending the command, an appropriate response code will be returned.
Note
To process a custom command, a plugin implementing the [IMTCustomSink::HookPluginCommand](imtcustomsink_hookplugincommand.md "HookPluginCommand") hook must be installed on the server.
The method is synchronous. Control is returned to the plugin only after the command processing is complete. Therefore, it is strongly recommended not to call the method from hooks and event handlers.
When transferring large volumes of data, as well as when sending data frequently, you should use this particular version of the function.
Sending a large number of commands and a large volume of data can negatively impact the interaction speed between servers in the cluster, affecting the transmission of trading data, ticks, etc. This can be especially noticeable when sending commands between non-main trading servers. Since there is no direct connection between them, all interactions are routed through the main server.