# ECNCreateHistoryMatchingArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ ECN ](imtadminapi_ecn.md "ECN")/ ECNCreateHistoryMatchingArray | [](imtadminapi_ecncreatehistorymatching.md "ECNCreateHistoryMatching") [](imtadminapi_ecncreatehistoryfilling.md "ECNCreateHistoryFilling") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ECNCreateHistoryMatchingArray
Create an array of matching order objects from history.
C++
IMTECNHistoryMatchingArray* IMTAdminAPI::ECNCreateHistoryMatchingArray()  
---  
.NET
CIMTECNHistoryMatchingArray CIMTAdminAPI.ECNCreateHistoryMatchingArray()  
---  
Return Value
The function returns a pointer to the created object that implements the [IMTECNHistoryMatchingArray](imtecnhistorymatchingarray.md "IMTECNMatchingArray") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTECNHistoryMatchingArray::Release](imtecnhistorymatchingarray_release.md "Release") method of this object.