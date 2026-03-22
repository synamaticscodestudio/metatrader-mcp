# ECNCreateMatching (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ ECN ](imtadminapi_ecn.md "ECN")/ ECNCreateMatching | [](imtadminapi_ecn.md "ECN") [](imtadminapi_ecncreatematchingarray.md "ECNCreateMatchingArray") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ECNCreateMatching
Create a matching order object.
C++
IMTECNMatching* IMTAdminAPI::ECNCreateMatching()  
---  
.NET
CIMTECNMatching CIMTAdminAPI.ECNCreateMatching()  
---  
Return Value
The function returns a pointer to the created object that implements the [IMTECNMatching](imtecnmatching.md "IMTECNMatching") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTECNMatching::Release](imtecnmatching_release.md "Release") method of this object.