# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Online Connections ](reference_online.md "Online Connections") / [ IMTOnlineArray ](imtonlinearray.md "IMTOnlineArray")/ Assign | [](imtonlinearray_release.md "Release") [](imtonlinearray_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTOnlineArray::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTOnlineArray::Assign( const IMTOnlineArray* array // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOnlineArray.Assign( CIMTOnlineArray array // Source object )  
---  
Parameters
array
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.