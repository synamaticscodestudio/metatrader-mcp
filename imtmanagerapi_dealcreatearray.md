# DealCreateArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Deals ](imtmanagerapi_trading_deal.md "Deals")/ DealCreateArray | [](imtmanagerapi_dealcreate.md "DealCreate") [](imtmanagerapi_dealsubscribe.md "DealSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::DealCreateArray
Create an object of the array of deals.
C++
IMTDealArray* IMTManagerAPI::DealCreateArray()  
---  
.NET
CIMTDealArray CIMTManagerAPI.DealCreateArray()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTDealArray](imtdealarray.md "IMTDealArray") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTDealArray::Release](imtdealarray_release.md "Release") method of this object.