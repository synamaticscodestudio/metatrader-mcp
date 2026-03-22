# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUserArray ](imtuserarray.md "IMTUserArray")/ Assign | [](imtuserarray_release.md "Release") [](imtuserarray_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTUserArray::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTUserArray::Assign( const IMTUserArray* array // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUserArray.Assign( CIMTUserArray array // Source object )  
---  
Parameters
array
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.