# UpdateCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Online Connections ](reference_online.md "Online Connections") / [ IMTOnlineArray ](imtonlinearray.md "IMTOnlineArray")/ UpdateCopy | [](imtonlinearray_update.md "Update") [](imtonlinearray_shift.md "Shift") |
| --- | --- | --- |
| --- | --- |

IMTOnlineArray::UpdateCopy
Change a connection record at the specified position of an array by copying the parameters of a passed object of a connection record.
C++
MTAPIRES IMTOnlineArray::UpdateCopy( const UINT  pos, // Position const IMTOnline* online // Connection record object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOnlineArray.UpdateCopy( uint  pos, // Position CIMTOnline online // Connection record object )  
---  
Parameters
pos
[in] Position of a client record in an array, starting with 0.
online
[in] Connection record object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method copies the parameters of the online object into a connection record object at the specified position of an array.
Unlike the [IMTOnlineArray::Update](imtonlinearray_update.md "Update"), method, calling this method does not set any additional conditions for the control of the online object, but is more resource-intensive, since an additional object is created.