# Delete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUserArray ](imtuserarray.md "IMTUserArray")/ Delete | [](imtuserarray_addcopy.md "AddCopy") [](imtuserarray_detach.md "Detach") |
| --- | --- | --- |
| --- | --- |

IMTUserArray::Delete
Delete a client record object by its position.
C++
MTAPIRES IMTUserArray::Delete( const UINT pos // The position of a client record )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUserArray.Delete( uint pos // The position of a client record )  
---  
Parameters
pos
[in] Position of a client record in an array, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The object to delete will be automatically released by calling the [IMTUser::Release](imtuser_release.md "Release") method.