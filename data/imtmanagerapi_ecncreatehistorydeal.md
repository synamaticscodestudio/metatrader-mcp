# ECNCreateHistoryDeal (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ ECN ](imtmanagerapi_ecn.md "ECN")/ ECNCreateHistoryDeal | [](imtmanagerapi_ecncreatehistoryfillingarray.md "ECNCreateHistoryFillingArray") [](imtmanagerapi_ecncreatehistorydealarray.md "ECNCreateHistoryDealArray") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ECNCreateHistoryDeal
Create an object of a deal from the ECN history.
C++
IMTECNHistoryDeal* IMTManagerAPI::ECNCreateHistoryDeal()  
---  
.NET
CIMTECNHistoryDeal CIMTManagerAPI.ECNCreateHistoryDeal()  
---  
Return Value
The function returns a pointer to the created object that implements the [IMTECNHistoryFilling](imtecnhistorydeal.md "IMTECNFilling") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTECNHistoryDeal::Release](imtecnhistorydeal_release.md "Release") method of this object.