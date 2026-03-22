# ECNCreateHistoryFilling (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ ECN ](imtadminapi_ecn.md "ECN")/ ECNCreateHistoryFilling | [](imtadminapi_ecncreatehistorymatchingarray.md "ECNCreateHistoryMatchingArray") [](imtadminapi_ecncreatehistoryfillingarray.md "ECNCreateHistoryFillingArray") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ECNCreateHistoryFilling
Create an object of a filling order from history.
C++
IMTECNHistoryFilling* IMTAdminAPI::ECNCreateHistoryFilling()  
---  
.NET
CIMTECNHistoryFilling CIMTAdminAPI.ECNCreateHistoryFilling()  
---  
Return Value
The function returns a pointer to the created object that implements the [IMTECNHistoryFilling](imtecnhistoryfilling.md "IMTECNFilling") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTECNHistoryFilling::Release](imtecnhistoryfilling_release.md "Release") method of this object.