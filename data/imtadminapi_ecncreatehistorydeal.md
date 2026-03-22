# ECNCreateHistoryDeal (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ ECN ](imtadminapi_ecn.md "ECN")/ ECNCreateHistoryDeal | [](imtadminapi_ecncreatehistoryfillingarray.md "ECNCreateHistoryFillingArray") [](imtadminapi_ecncreatehistorydealarray.md "ECNCreateHistoryDealArray") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ECNCreateHistoryDeal
Create an object of a deal from the ECN history.
C++
IMTECNHistoryDeal* IMTAdminAPI::ECNCreateHistoryDeal()  
---  
.NET
CIMTECNHistoryDeal CIMTAdminAPI.ECNCreateHistoryDeal()  
---  
Return Value
The function returns a pointer to the created object that implements the [IMTECNHistoryFilling](imtecnhistorydeal.md "IMTECNFilling") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTECNHistoryDeal::Release](imtecnhistorydeal_release.md "Release") method of this object.