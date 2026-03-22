# AddCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUserArray ](imtuserarray.md "IMTUserArray")/ AddCopy | [](imtuserarray_add.md "Add") [](imtuserarray_delete.md "Delete") |
| --- | --- | --- |
| --- | --- |

IMTUserArray::AddCopy
Adds a copy of a client record object at the end of an array.
C++
MTAPIRES IMTUserArray::AddCopy( const IMTUser* user // The client record to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUserArray.AddCopy( CIMTUser user // The client record to be added )  
---  
Parameters
user
[in] An object of the client record.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method creates a copy of the user object and places it at the end of the array.
Unlike [IMTUserArray::Add(IMTUser* user)](imtuserarray_add.md "Add"), calling this method does not set any additional conditions for the control of the 'user' object, but is more resource-intensive, since an additional object is created.
IMTUserArray::AddCopy
Adds copies of the objects of client records to an array.
C++
MTAPIRES IMTUserArray::AddCopy( const IMTUserArray* array // An array of client records to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUserArray.AddCopy( CIMTUserArray array // An array of client records to be added )  
---  
Parameters
array
[in] An object of arrays of client records.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method creates a copy of the client record objects belonging to the array object, and inserts them at the end of the current array.
Unlike [IMTUserArray::Add(IMTUserArray* array)](imtuserarray_add.md "Add"), calling this method does not change the source array object, but it is more resource-intensive, since additional objects are created.