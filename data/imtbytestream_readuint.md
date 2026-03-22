# ReadUInt (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Byte Stream ](reference_bytestream.md "Byte Stream") / [ IMTByteStream ](imtbytestream.md "IMTByteStream")/ ReadUInt | [](imtbytestream_readint.md "ReadInt") [](imtbytestream_readint64.md "ReadInt64") |
| --- | --- | --- |
| --- | --- |

IMTByteStream::ReadUInt
Reads UInt data from the stream object.
C++
MTAPIRES IMTByteStream::ReadUInt( UINT& data // Data )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTByteStream.ReadUInt( out uint data // Data )  
---  
Parameters
data
[out] Reference to the read data.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.