# AddChar (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Byte Stream ](reference_bytestream.md "Byte Stream") / [ IMTByteStream ](imtbytestream.md "IMTByteStream")/ AddChar | [](imtbytestream_add.md "Add") [](imtbytestream_adduchar.md "AddUChar") |
| --- | --- | --- |
| --- | --- |

IMTByteStream::AddChar
Adds Char data to the stream object.
C++
MTAPIRES IMTByteStream::AddChar( const char data // Data )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTByteStream.AddChar( sbyte data // Data )  
---  
Parameters
data
[in] The data that you want to add.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.