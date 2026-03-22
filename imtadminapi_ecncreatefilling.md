# ECNCreateFilling (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ ECN ](imtadminapi_ecn.md "ECN")/ ECNCreateFilling | [](imtadminapi_ecncreatematchingarray.md "ECNCreateMatchingArray") [](imtadminapi_ecncreatefillingarray.md "ECNCreateFillingArray") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ECNCreateFilling
Create a filling order object.
C++
IMTECNFilling* IMTAdminAPI::ECNCreateFilling()  
---  
.NET
CIMTECNFilling CIMTAdminAPI.ECNCreateFilling()  
---  
Return Value
The function returns a pointer to the created object that implements the [IMTECNFilling](imtecnfilling.md "IMTECNFilling") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTECNFilling::Release](imtecnfilling_release.md "Release") method of this object.