# ReadStr (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Byte Stream ](reference_bytestream.md "Byte Stream") / [ IMTByteStream ](imtbytestream.md "IMTByteStream")/ ReadStr | [](imtbytestream_readresult.md "ReadResult") [](imtbytestream_webaddparamstr.md "WebAddParamStr") |
| --- | --- | --- |
| --- | --- |

IMTByteStream::ReadStr
Reads String data from the stream object.
C++
MTAPIRES IMTByteStream::ReadStr( MTAPISTR& buf // Data )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTByteStream.ReadStr( out string buf // Data )  
---  
Parameters
buf
[out] Reference to the read data.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Data is read until a newline character (\n) or until the end of line character (\0).