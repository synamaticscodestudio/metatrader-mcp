# ECNCreateHistoryFilling (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ ECN ](imtmanagerapi_ecn.md "ECN")/ ECNCreateHistoryFilling | [](imtmanagerapi_ecncreatehistorymatchingarray.md "ECNCreateHistoryMatchingArray") [](imtmanagerapi_ecncreatehistoryfillingarray.md "ECNCreateHistoryFillingArray") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ECNCreateHistoryFilling
Create an object of a filling order from history.
C++
IMTECNHistoryFilling* IMTManagerAPI::ECNCreateHistoryFilling()  
---  
.NET
CIMTECNHistoryFilling CIMTManagerAPI.ECNCreateHistoryFilling()  
---  
Return Value
The function returns a pointer to the created object that implements the [IMTECNHistoryFilling](imtecnhistoryfilling.md "IMTECNFilling") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTECNHistoryFilling::Release](imtecnhistoryfilling_release.md "Release") method of this object.