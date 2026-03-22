# DealCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Deals ](serverapi_trading_deal.md "Deals")/ DealCreate | [](serverapi_trading_deal.md "Deals") [](imtserverapi_dealcreatearray.md "DealCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DealCreate
Create an object of a deal.
IMTDeal* IMTServerAPI::DealCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTDeal](imtdeal.md "IMTDeal") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTDeal::Release](imtdeal_release.md "Release") method of this object.