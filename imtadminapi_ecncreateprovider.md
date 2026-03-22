# ECNCreateProvider (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ ECN ](imtadminapi_ecn.md "ECN")/ ECNCreateProvider | [](imtadminapi_ecncreatefillingarray.md "ECNCreateFillingArray") [](imtadminapi_ecncreateproviderarray.md "ECNCreateProviderArray") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ECNCreateProvider
Create an object of a provider via which orders are executed.
C++
IMTECNProvider* IMTAdminAPI::ECNCreateProvider()  
---  
.NET
CIMTECNProvider CIMTAdminAPI.ECNCreateProvider()  
---  
Return Value
The function returns a pointer to the created object that implements the [IMTECNProvider](imtecnprovider.md "IMTECNProvider") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTECNProvider::Release](imtecnprovider_release.md "Release") method of this object.