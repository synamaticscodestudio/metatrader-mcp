# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNFillingArray ](imtecnfillingarray.md "IMTECNFillingArray")/ Assign | [](imtecnfillingarray_release.md "Release") [](imtecnfillingarray_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTECNFillingArray::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTECNFillingArray::Assign( const IMTECNFillingArray* array // source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNFillingArray.Assign( CIMTECNFillingArray array // source object )  
---  
Parameters
array
[in] Source object.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.