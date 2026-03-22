# ECNCreateHistoryFillingArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ ECN ](imtadminapi_ecn.md "ECN")/ ECNCreateHistoryFillingArray | [](imtadminapi_ecncreatehistoryfilling.md "ECNCreateHistoryFilling") [](imtadminapi_ecncreatehistorydeal.md "ECNCreateHistoryDeal") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ECNCreateHistoryFillingArray
Create an array of filling order objects from history.
C++
IMTECNHistoryFillingArray* IMTAdminAPI::ECNCreateHistoryFillingArray()  
---  
.NET
CIMTECNHistoryFillingArray CIMTAdminAPI.ECNCreateHistoryFillingArray()  
---  
Return Value
The function returns a pointer to the created object that implements the [IMTECNHistoryFillingArray](imtecnhistoryfillingarray.md "IMTECNFillingArray") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTECNHistoryFillingArray::Release](imtecnhistoryfillingarray_release.md "Release") method of this object.