# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNMatchingArray ](imtecnmatchingarray.md "IMTECNMatchingArray")/ Assign | [](imtecnmatchingarray_release.md "Release") [](imtecnmatchingarray_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTECNMatchingArray::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTECNMatchingArray::Assign( const IMTECNMatchingArray* array // source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNMatchingArray.Assign( CIMTECNMatchingArray array // source object )  
---  
Parameters
array
[in] Source object.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.