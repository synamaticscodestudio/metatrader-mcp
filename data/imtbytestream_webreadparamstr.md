# WebReadParamStr (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Byte Stream ](reference_bytestream.md "Byte Stream") / [ IMTByteStream ](imtbytestream.md "IMTByteStream")/ WebReadParamStr | [](imtbytestream_webreadparamname.md "WebReadParamName") [](imtbytestream_webreadparamskip.md "WebReadParamSkip") |
| --- | --- | --- |
| --- | --- |

IMTByteStream::WebReadParamStr
Reads the value of a String parameter from the command sent by a web client.
C++
MTAPIRES IMTByteStream::WebReadParamStr( MTAPISTR& str // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTByteStream.WebReadParamStr( out string str // Value )  
---  
Parameters
str
[out] The value of a parameter of type String.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
This method is used only in the MetaTrader 5 Server API.
IMTByteStream::WebReadParamStr
Reads the value of a String parameter from the command sent by a web client.
C++
MTAPIRES IMTByteStream::WebReadParamStr( LPWSTR value, // Value const UINT size // Size )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTByteStream.WebReadParamStr( out tring value, // Value uint size // Size )  
---  
Parameters
value
[out] The value of a parameter of type String.
size
[in] The size of the buffer, to which the read string will be placed.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
This method is used only in the MetaTrader 5 Server API.