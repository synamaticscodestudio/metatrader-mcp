# CustomCommand (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Custom Functions ](imtmanagerapi_custom.md "Custom Functions")/ CustomCommand | [](imtmanagerapi_custom.md "Custom Functions") [](imtmanagerapi_customcreatestream.md "CustomCreateStream") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::CustomCommand
Sends a custom command to the server.
C++
virtual MTAPIRES IMTManagerAPI::CustomCommand( LPCVOID indata, // Input data const UINT indata_len, // Size of input data LPVOID& outdata, // Output data UINT& outdata_len // Size of output data )  
---  
.NET
byte[] CIMTManagerAPI.CustomCommand( byte[] indata, // Input data out MTRetCode res // Response code )  
---  
Parameters
indata
[in] Data returned to the server.
indata_len
[in] Size of data to pass in bytes.
outdata
[out] A reference to the data returned in response to the command.
outdata_len
[out] A reference to the size of data returned in response to the command.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
An appropriate plugin must be installed in the server for processing custom commands ([IMTCustomSink::HookManagerCommand](imtcustomsink_hookmanagercommand.md "HookManagerCommand")).
It is recommended to use this variant of the function only when working with small and infrequent data transmissions. The second variant of the function described below is adapted for transmission of large amount of data.
IMTManagerAPI::CustomCommand
Sends a custom command to the server.
C++
virtual MTAPIRES IMTManagerAPI::CustomCommand( IMTByteStream* indata, // Input data IMTByteStream* outdata, // Output data )  
---  
.NET
MTRetCode CIMTManagerAPI.CustomCommand( CIMTByteStream indata, // Input data CIMTByteStream outdata, // Output data )  
---  
Parameters
indata
[in] A pointer to the [object of a byte stream](imtbytestream.md "IMTByteStream") passed to the server.
outdata
[out] A pointer to the [object of a byte stream](imtbytestream.md "IMTByteStream") returned in response to the command.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
An appropriate plugin must be installed in the server for processing custom commands. ([IMTCustomSink::HookManagerCommand](imtcustomsink_hookmanagercommand.md "HookManagerCommand")).
For transmission of large amount of data and for frequent transmissions it is recommended to use this exact variant of the function.