# ECNCreateHistoryMatchingArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ ECN ](imtmanagerapi_ecn.md "ECN")/ ECNCreateHistoryMatchingArray | [](imtmanagerapi_ecncreatehistorymatching.md "ECNCreateHistoryMatching") [](imtmanagerapi_ecncreatehistoryfilling.md "ECNCreateHistoryFilling") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ECNCreateHistoryMatchingArray
Create an array of matching order objects from history.
C++
IMTECNHistoryMatchingArray* IMTManagerAPI::ECNCreateHistoryMatchingArray()  
---  
.NET
CIMTECNHistoryMatchingArray CIMTManagerAPI.ECNCreateHistoryMatchingArray()  
---  
Return Value
The function returns a pointer to the created object that implements the [IMTECNHistoryMatchingArray](imtecnhistorymatchingarray.md "IMTECNMatchingArray") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTECNHistoryMatchingArray::Release](imtecnhistorymatchingarray_release.md "Release") method of this object.