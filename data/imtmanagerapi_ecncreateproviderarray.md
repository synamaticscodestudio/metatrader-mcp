# ECNCreateProviderArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ ECN ](imtmanagerapi_ecn.md "ECN")/ ECNCreateProviderArray | [](imtmanagerapi_ecncreateprovider.md "ECNCreateProvider") [](imtmanagerapi_ecncreatehistorymatching.md "ECNCreateHistoryMatching") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ECNCreateProviderArray
Create an object of the array of providers via which orders are executed.
C++
IMTECNProviderArray* IMTManagerAPI::ECNCreateProviderArray()  
---  
.NET
CIMTECNProviderArray CIMTManagerAPI.ECNCreateProviderArray()  
---  
Return Value
The function returns a pointer to the created object that implements the [IMTECNProviderArray](imtecnproviderarray.md "IMTECNProviderArray") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTECNProviderArray::Release](imtecnproviderarray_release.md "Release") method of this object.