# DealCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Deals ](imtmanagerapi_trading_deal.md "Deals")/ DealCreate | [](imtmanagerapi_trading_deal.md "Deals") [](imtmanagerapi_dealcreatearray.md "DealCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::DealCreate
Create an object of a deal.
C++
IMTDeal* IMTManagerAPI::DealCreate()  
---  
.NET
CIMTDeal CIMTManagerAPI.DealCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTDeal](imtdeal.md "IMTDeal") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTDeal::Release](imtdeal_release.md "Release") method of this object.