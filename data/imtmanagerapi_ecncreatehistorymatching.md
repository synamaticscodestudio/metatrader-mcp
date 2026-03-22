# ECNCreateHistoryMatching (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ ECN ](imtmanagerapi_ecn.md "ECN")/ ECNCreateHistoryMatching | [](imtmanagerapi_ecncreateproviderarray.md "ECNCreateProviderArray") [](imtmanagerapi_ecncreatehistorymatchingarray.md "ECNCreateHistoryMatchingArray") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ECNCreateHistoryMatching
Create an object of a matching order from history.
C++
IMTECNHistoryMatching* IMTManagerAPI::ECNCreateHistoryMatching()  
---  
.NET
CIMTECNHistoryMatching CIMTManagerAPI.ECNCreateHistoryMatching()  
---  
Return Value
The function returns a pointer to the created object that implements the [IMTECNHistoryFillingArray](imtecnhistorymatching.md "IMTECNMatching") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTECNHistoryMatching::Release](imtecnhistorymatching_release.md "Release") method of this object.