# AddCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Online Connections ](reference_online.md "Online Connections") / [ IMTOnlineArray ](imtonlinearray.md "IMTOnlineArray")/ AddCopy | [](imtonlinearray_add.md "Add") [](imtonlinearray_delete.md "Delete") |
| --- | --- | --- |
| --- | --- |

IMTOnlineArray::AddCopy
Add a copy of connection record object at the end of an array.
C++
MTAPIRES IMTOnlineArray::AddCopy( const IMTOnline* online // Added connection record )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOnlineArray.AddCopy( CIMTOnline online // Added connection record )  
---  
Parameters
online
[in] Connection record object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method creates a copy of the user object and places it at the end of the array.
Unlike [IMTOnlineArray::Add(IMTOnline* online)](imtonlinearray_add.md "Add") method, calling this method does not set any additional conditions for the control of the online object, but is more resource-intensive, since an additional object is created.
IMTOnlineArray::AddCopy
Add copies of the connection record objects in an array.
C++
MTAPIRES IMTOnlineArray::AddCopy( const IMTOnlineArray* array // Added connection record array )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOnlineArray.AddCopy( CIMTOnlineArray array // Added connection record array )  
---  
Parameters
array
[in] Connection record array object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method creates a copy of the client record objects belonging to the array object, and inserts them at the end of the current array.
Unlike [IMTOnlineArray::Add(IMTOnlineArray* array)](imtonlinearray_add.md "Add") method, calling this method does not change the source array object, but is more resource-intensive, since additional objects are created.