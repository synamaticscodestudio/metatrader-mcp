# ECNCreateHistoryDealArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ ECN ](imtmanagerapi_ecn.md "ECN")/ ECNCreateHistoryDealArray | [](imtmanagerapi_ecncreatehistorydeal.md "ECNCreateHistoryDeal") [](imtmanagerapi_ecnrequestbygroup.md "ECNRequestByGroup") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ECNCreateHistoryDealArray
Create an object of an array of deals from the ECN history.
C++
IMTECNHistoryDealArray* IMTManagerAPI::ECNCreateHistoryDealArray()  
---  
.NET
IMTECNHistoryDealArray CIMTManagerAPI.ECNCreateHistoryDealArray()  
---  
Return Value
The function returns a pointer to the created object that implements the [IMTECNHistoryFilling](imtecnhistorydealarray.md "IMTECNMatchingArray") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTECNHistoryDealArray::Release](imtecnhistorydealarray_release.md "Release") method of this object.