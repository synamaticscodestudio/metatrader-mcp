# ECNCreateProvider (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ ECN ](imtmanagerapi_ecn.md "ECN")/ ECNCreateProvider | [](imtmanagerapi_ecncreatefillingarray.md "ECNCreateFillingArray") [](imtmanagerapi_ecncreateproviderarray.md "ECNCreateProviderArray") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ECNCreateProvider
Create an object of a provider via which orders are executed.
C++
IMTECNProvider* IMTManagerAPI::ECNCreateProvider()  
---  
.NET
CIMTECNProvider CIMTManagerAPI.ECNCreateProvider()  
---  
Return Value
The function returns a pointer to the created object that implements the [IMTECNProvider](imtecnprovider.md "IMTECNProvider") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTECNProvider::Release](imtecnprovider_release.md "Release") method of this object.