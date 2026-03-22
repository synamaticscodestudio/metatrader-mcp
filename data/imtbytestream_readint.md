# ReadInt (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Byte Stream ](reference_bytestream.md "Byte Stream") / [ IMTByteStream ](imtbytestream.md "IMTByteStream")/ ReadInt | [](imtbytestream_readushort.md "ReadUShort") [](imtbytestream_readuint.md "ReadUInt") |
| --- | --- | --- |
| --- | --- |

IMTByteStream::ReadInt
Reads Int data from the stream object.
C++
MTAPIRES IMTByteStream::ReadInt( INT& data // Data )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTByteStream.ReadInt( out int data // Data )  
---  
Parameters
data
[out] Reference to the read data.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.