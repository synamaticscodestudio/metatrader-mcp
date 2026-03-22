# ReadUShort (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Byte Stream ](reference_bytestream.md "Byte Stream") / [ IMTByteStream ](imtbytestream.md "IMTByteStream")/ ReadUShort | [](imtbytestream_readshort.md "ReadShort") [](imtbytestream_readint.md "ReadInt") |
| --- | --- | --- |
| --- | --- |

IMTByteStream::ReadUShort
Reads UShort data from the stream object.
C++
MTAPIRES IMTByteStream::ReadUShort( USHORT& data // Data )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTByteStream.ReadUShort( out ushort data // Data )  
---  
Parameters
data
[out] Reference to the read data.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.