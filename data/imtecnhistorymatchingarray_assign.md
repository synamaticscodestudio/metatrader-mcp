# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryMatchingArray ](imtecnhistorymatchingarray.md "IMTECNMatchingArray")/ Assign | [](imtecnhistorymatchingarray_release.md "Release") [](imtecnhistorymatchingarray_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryMatchingArray
Assign a passed object to the current one.
C++
MTAPIRES IMTECNMatchingArray::Assign( const IMTECNHistoryMatchingArray* array // source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryMatchingArray.Assign( CIMTECNHistoryMatchingArray array // source object )  
---  
Parameters
array
[in] Source object.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.