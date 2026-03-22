# DealCreateArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Deals ](imtadminapi_trading_deal.md "Functions")/ DealCreateArray | [](imtadminapi_dealcreate.md "DealCreate") [](imtadminapi_dealrequest.md "DealRequest") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::DealCreateArray
Create an object of the array of deals.
C++
IMTDealArray* IMTAdminAPI::DealCreateArray()  
---  
.NET
CIMTDealArray CIMTAdminAPI.DealCreateArray()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTDealArray](imtdealarray.md "IMTDealArray") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTDealArray::Release](imtdealarray_release.md "Release") method of this object.