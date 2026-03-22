# ECNCreateHistoryDealArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ ECN ](imtadminapi_ecn.md "ECN")/ ECNCreateHistoryDealArray | [](imtadminapi_ecncreatehistorydeal.md "ECNCreateHistoryDeal") [](imtadminapi_ecnrequestbygroup.md "ECNRequestByGroup") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ECNCreateHistoryDealArray
Create an object of an array of deals from the ECN history.
C++
IMTECNHistoryDealArray* IMTAdminAPI::ECNCreateHistoryDealArray()  
---  
.NET
IMTECNHistoryDealArray CIMTAdminAPI.ECNCreateHistoryDealArray()  
---  
Return Value
The function returns a pointer to the created object that implements the [IMTECNHistoryFilling](imtecnhistorydealarray.md "IMTECNMatchingArray") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTECNHistoryDealArray::Release](imtecnhistorydealarray_release.md "Release") method of this object.