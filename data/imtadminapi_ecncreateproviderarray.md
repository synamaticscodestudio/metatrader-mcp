# ECNCreateProviderArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ ECN ](imtadminapi_ecn.md "ECN")/ ECNCreateProviderArray | [](imtadminapi_ecncreateprovider.md "ECNCreateProvider") [](imtadminapi_ecncreatehistorymatching.md "ECNCreateHistoryMatching") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ECNCreateProviderArray
Create an object of the array of providers via which orders are executed.
C++
IMTECNProviderArray* IMTAdminAPI::ECNCreateProviderArray()  
---  
.NET
CIMTECNProviderArray CIMTAdminAPI.ECNCreateProviderArray()  
---  
Return Value
The function returns a pointer to the created object that implements the [IMTECNProviderArray](imtecnproviderarray.md "IMTECNProviderArray") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTECNProviderArray::Release](imtecnproviderarray_release.md "Release") method of this object.