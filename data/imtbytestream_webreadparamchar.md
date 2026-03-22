# WebReadParamChar (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Byte Stream ](reference_bytestream.md "Byte Stream") / [ IMTByteStream ](imtbytestream.md "IMTByteStream")/ WebReadParamChar | [](imtbytestream_webreadparamskip.md "WebReadParamSkip") [](imtbytestream_webreadparamuchar.md "WebReadParamUChar") |
| --- | --- | --- |
| --- | --- |

IMTByteStream::WebReadParamChar
Reads the value of a Char parameter from the command sent by a web client.
C++
MTAPIRES IMTByteStream::WebReadParamChar( char& data // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTByteStream.WebReadParamChar( out sbyte data // Value )  
---  
Parameters
data
[out] The value of a parameter of type Char. The method reads the received string and casts it to the appropriate type.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method is used only in the MetaTrader 5 Server API.