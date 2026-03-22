# DealCreateArray (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Deals ](serverapi_trading_deal.md "Deals")/ DealCreateArray | [](imtserverapi_dealcreate.md "DealCreate") [](imtserverapi_dealsubscribe.md "DealSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DealCreateArray
Create an object of the array of deals.
IMTDealArray* IMTServerAPI::DealCreateArray()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTDealArray](imtdealarray.md "IMTDealArray") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTDealArray::Release](imtdealarray_release.md "Release") method of this object.