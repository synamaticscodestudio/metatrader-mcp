# ECNCreateHistoryMatching (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ ECN ](imtadminapi_ecn.md "ECN")/ ECNCreateHistoryMatching | [](imtadminapi_ecncreateproviderarray.md "ECNCreateProviderArray") [](imtadminapi_ecncreatehistorymatchingarray.md "ECNCreateHistoryMatchingArray") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ECNCreateHistoryMatching
Create an object of a matching order from history.
C++
IMTECNHistoryMatching* IMTAdminAPI::ECNCreateHistoryMatching()  
---  
.NET
CIMTECNHistoryMatching CIMTAdminAPI.ECNCreateHistoryMatching()  
---  
Return Value
The function returns a pointer to the created object that implements the [IMTECNHistoryFillingArray](imtecnhistorymatching.md "IMTECNMatching") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTECNHistoryMatching::Release](imtecnhistorymatching_release.md "Release") method of this object.