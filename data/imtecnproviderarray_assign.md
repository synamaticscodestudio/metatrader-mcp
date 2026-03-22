# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNProviderArray ](imtecnproviderarray.md "IMTECNProviderArray")/ Assign | [](imtecnproviderarray_release.md "Release") [](imtecnproviderarray_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTECNProviderArray::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTECNProviderArray::Assign( const IMTECNProviderArray* provider // source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNProviderArray.Assign( CIMTECNProviderArray provider // source object )  
---  
Parameters
provider
[in] Source object.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.