# ECNCreateHistoryFillingArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ ECN ](imtmanagerapi_ecn.md "ECN")/ ECNCreateHistoryFillingArray | [](imtmanagerapi_ecncreatehistoryfilling.md "ECNCreateHistoryFilling") [](imtmanagerapi_ecncreatehistorydeal.md "ECNCreateHistoryDeal") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ECNCreateHistoryFillingArray
Create an array of filling order objects from history.
C++
IMTECNHistoryFillingArray* IMTManagerAPI::ECNCreateHistoryFillingArray()  
---  
.NET
CIMTECNHistoryFillingArray CIMTManagerAPI.ECNCreateHistoryFillingArray()  
---  
Return Value
The function returns a pointer to the created object that implements the [IMTECNHistoryFillingArray](imtecnhistoryfillingarray.md "IMTECNFillingArray") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTECNHistoryFillingArray::Release](imtecnhistoryfillingarray_release.md "Release") method of this object.