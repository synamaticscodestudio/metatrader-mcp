# Delete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Online Connections ](reference_online.md "Online Connections") / [ IMTOnlineArray ](imtonlinearray.md "IMTOnlineArray")/ Delete | [](imtonlinearray_addcopy.md "AddCopy") [](imtonlinearray_detach.md "Detach") |
| --- | --- | --- |
| --- | --- |

IMTOnlineArray::Delete
Delete connection record object by its position.
C++
MTAPIRES IMTOnlineArray::Delete( const UINT pos // Connection record position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOnlineArray.Delete( uint pos // Connection record position )  
---  
Parameters
pos
[in] Position of a connection record in an array, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The object to delete will be automatically released by calling the [IMTOnline::Release](imtonline_release.md "Release") method.