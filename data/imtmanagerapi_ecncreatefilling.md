# ECNCreateFilling (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ ECN ](imtmanagerapi_ecn.md "ECN")/ ECNCreateFilling | [](imtmanagerapi_ecncreatematchingarray.md "ECNCreateMatchingArray") [](imtmanagerapi_ecncreatefillingarray.md "ECNCreateFillingArray") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ECNCreateFilling
Create a filling order object.
C++
IMTECNFilling* IMTManagerAPI::ECNCreateFilling()  
---  
.NET
CIMTECNFilling CIMTManagerAPI.ECNCreateFilling()  
---  
Return Value
The function returns a pointer to the created object that implements the [IMTECNFilling](imtecnfilling.md "IMTECNFilling") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTECNFilling::Release](imtecnfilling_release.md "Release") method of this object.