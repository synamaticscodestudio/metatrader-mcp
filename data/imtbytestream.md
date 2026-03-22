# IMTByteStream (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Byte Stream ](reference_bytestream.md "Byte Stream")/ IMTByteStream | [](reference_bytestream.md "Byte Stream") [](imtbytestream_release.md "Release") |
| --- | --- | --- |
| --- | --- |

IMTByteStream
The interface is designed to represent the byte stream. It enables transmission of raw byte values.The interface provides for an easier operation with transmitted data, because all the required memory operations are implemented in the interface and are hidden from the user.
Each IMTByteStream object can only be used for data reading (Read methods), or for data writing (Add methods).  
---  
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtbytestream_release.md "Release") | Delete the current object. |
| [Assign](imtbytestream_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtbytestream_clear.md "Clear") | Clear an object. |
| [Len](imtbytestream_len.md "Len") | Gets the length of the stream object in bytes. |
| [ReadLen](imtbytestream_readlen.md "ReadLen") | Gets the current amount of data read from the stream object. |
| [Add](imtbytestream_add.md "Add") | Adds data to the stream object. |
| [AddChar](imtbytestream_addchar.md "AddChar") | Adds Char data to the stream object. |
| [AddUChar](imtbytestream_adduchar.md "AddUChar") | Adds UChar data to the stream object. |
| [AddShort](imtbytestream_addshort.md "AddShort") | Adds Short data to the stream object. |
| [AddUShort](imtbytestream_addushort.md "AddUShort") | Adds UShort data to the stream object. |
| [AddInt](imtbytestream_addint.md "AddInt") | Adds Int data to the stream object. |
| [AddUInt](imtbytestream_adduint.md "AddUInt") | Adds UInt data to the stream object. |
| [AddInt64](imtbytestream_addint64.md "AddInt64") | Adds Int64 data to the stream object. |
| [AddUInt64](imtbytestream_adduint64.md "AddUInt64") | Adds UInt64 data to the stream object. |
| [AddFloat](imtbytestream_addfloat.md "AddFloat") | Adds Float data to the stream object. |
| [AddDouble](imtbytestream_adddouble.md "AddDouble") | Adds Double data to the stream object. |
| [AddResult](imtbytestream_addresult.md "AddResult") | Adds MTAPIRES data to the stream object. |
| [AddStr](imtbytestream_addstr.md "AddStr") | Adds String data to the stream object. |
| [ReadReset](imtbytestream_readreset.md "ReadReset") | Resets the read pointer of the stream object to the beginning. |
| [Read](imtbytestream_read.md "Read") | Reads data from the stream object. |
| [ReadSkip](imtbytestream_readskip.md "ReadSkip") | Moves the read pointer by the specified number of bytes. |
| [ReadChar](imtbytestream_readchar.md "ReadChar") | Reads Char data from the stream object. |
| [ReadUChar](imtbytestream_readuchar.md "ReadUChar") | Reads UChar data from the stream object. |
| [ReadShort](imtbytestream_readshort.md "ReadShort") | Reads Short data from the stream object. |
| [ReadUShort](imtbytestream_readushort.md "ReadUShort") | Reads UShort data from the stream object. |
| [ReadInt](imtbytestream_readint.md "ReadInt") | Reads Int data from the stream object. |
| [ReadUInt](imtbytestream_readuint.md "ReadUInt") | Reads UInt data from the stream object. |
| [ReadInt64](imtbytestream_readint64.md "ReadInt64") | Reads Int64 data from the stream object. |
| [ReadUInt64](imtbytestream_readuint64.md "ReadUInt64") | Reads UInt64 data from the stream object. |
| [ReadFloat](imtbytestream_readfloat.md "ReadFloat") | Reads Float data from the stream object. |
| [ReadDouble](imtbytestream_readdouble.md "ReadDouble") | Reads Double data from the stream object. |
| [ReadResult](imtbytestream_readresult.md "ReadResult") | Reads MTAPIRES data from the stream object. |
| [ReadStr](imtbytestream_readstr.md "ReadStr") | Reads String data from the stream object. |

The web methods described below are only used for the MetaTrader 5 Server API.  
[WebAddParamStr](imtbytestream_webaddparamstr.md "WebAddParamStr") | Adds a String parameter to the stream object for transmission to a web client.  
[WebAddParamChar](imtbytestream_webaddparamchar.md "WebAddParamChar") | Adds a Char parameter to the stream object for transmission to a web client.  
[WebAddParamUChar](imtbytestream_webaddparamuchar.md "WebAddParamUChar") | Adds a UChar parameter to the stream object for transmission to a web client.  
[WebAddParamShort](imtbytestream_webaddparamshort.md "WebAddParamShort") | Adds a Short parameter to the stream object for transmission to a web client.  
[WebAddParamUShort](imtbytestream_webaddparamushort.md "WebAddParamUShort") | Adds a UShort parameter to the stream object for transmission to a web client.  
[WebAddParamInt](imtbytestream_webaddparamint.md "WebAddParamInt") | Adds an Int parameter to the stream object for transmission to a web client.  
[WebAddParamUInt](imtbytestream_webaddparamuint.md "WebAddParamUInt") | Adds a UInt to the stream object for transmission to a web client.  
[WebAddParamInt64](imtbytestream_webaddparamint64.md "WebAddParamInt64") | Adds an Int64 parameter to the stream object for transmission to a web client.  
[WebAddParamUInt64](imtbytestream_webaddparamuint64.md "WebAddParamUInt64") | Adds a UInt64 parameter to the stream object for transmission to a web client.  
[WebAddParamDouble](imtbytestream_webaddparamdouble.md "WebAddParamDouble") | Adds a Double parameter to the stream object for transmission to a web client.  
[WebAddParamFinalize](imtbytestream_webaddparamfinalize.md "WebAddParamFinalize") | Completes the formation of parameters of the command sent in response to a web client.  
[WebReadCommand](imtbytestream_webreadcommand.md "WebReadCommand") | Reads the command sent by a web client.  
[WebReadParamName](imtbytestream_webreadparamname.md "WebReadParamName") | Reads the name of the next parameter of the command sent by a web client.  
[WebReadParamStr](imtbytestream_webreadparamstr.md "WebReadParamStr") | Reads the value of a String parameter from the command sent by a web client.  
[WebReadParamSkip](imtbytestream_webreadparamskip.md "WebReadParamSkip") | Skips parameter value. After calling this method, moves to the name of the next parameter.  
[WebReadParamChar](imtbytestream_webreadparamchar.md "WebReadParamChar") | Reads the value of a Char parameter from the command sent by a web client.  
[WebReadParamUChar](imtbytestream_webreadparamuchar.md "WebReadParamUChar") | Reads the value of a UChar parameter from the command sent by a web client.  
[WebReadParamShort](imtbytestream_webreadparamshort.md "WebReadParamShort") | Reads the value of a Short parameter from the command sent by a web client.  
[WebReadParamUShort](imtbytestream_webreadparamushort.md "WebReadParamUShort") | Reads the value of a UShort parameter from the command sent by a web client.  
[WebReadParamInt](imtbytestream_webreadparamint.md "WebReadParamInt") | Reads the value of an Int parameter from the command sent by a web client.  
[WebReadParamUInt](imtbytestream_webreadparamuint.md "WebReadParamUInt") | Reads the value of a UInt parameter from the command sent by a web client.  
[WebReadParamInt64](imtbytestream_webreadparamint64.md "WebReadParamInt64") | Reads the value of an Int64 parameter from the command sent by a web client.  
[WebReadParamUInt64](imtbytestream_webreadparamuint64.md "WebReadParamUInt64") | Reads the value of a UInt64 parameter from the command sent by a web client.  
[WebReadParamDouble](imtbytestream_webreadparamdouble.md "WebReadParamDouble") | Reads the value of a Double parameter from the command sent by a web client.