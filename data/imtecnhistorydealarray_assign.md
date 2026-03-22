# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryDealArray ](imtecnhistorydealarray.md "IMTECNMatchingArray")/ Assign | [](imtecnhistorydealarray_release.md "Release") [](imtecnhistorydealarray_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryDealArray
Assign a passed object to the current one.
C++
MTAPIRES IMTECNHistoryDealArray::Assign( const IMTECNHistoryDealArray* array // source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryDealArray.Assign( CIMTECNHistoryDealArray array // source object )  
---  
Parameters
array
[in] Source object.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.