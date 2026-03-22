# ECNCreateMatching (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ ECN ](imtmanagerapi_ecn.md "ECN")/ ECNCreateMatching | [](imtmanagerapi_ecn.md "ECN") [](imtmanagerapi_ecncreatematchingarray.md "ECNCreateMatchingArray") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ECNCreateMatching
Create a matching order object.
C++
IMTECNMatching* IMTManagerAPI::ECNCreateMatching()  
---  
.NET
CIMTECNMatching CIMTManagerAPI.ECNCreateMatching()  
---  
Return Value
The function returns a pointer to the created object that implements the [IMTECNMatching](imtecnmatching.md "IMTECNMatching") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTECNMatching::Release](imtecnmatching_release.md "Release") method of this object.