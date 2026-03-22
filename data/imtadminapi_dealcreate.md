# DealCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Deals ](imtadminapi_trading_deal.md "Functions")/ DealCreate | [](imtadminapi_trading_deal.md "Functions") [](imtadminapi_dealcreatearray.md "DealCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::DealCreate
Create an object of a deal.
C++
IMTDeal* IMTAdminAPI::DealCreate()  
---  
.NET
CIMTDeal CIMTAdminAPI.DealCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTDeal](imtdeal.md "IMTDeal") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTDeal::Release](imtdeal_release.md "Release") method of this object.