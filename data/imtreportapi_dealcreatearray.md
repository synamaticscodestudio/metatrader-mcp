# DealCreateArray (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Trade Databases ](imtreportapi_trade.md "Trade Database Functions") / [ Deals ](imtreportapi_deal.md "Deals")/ DealCreateArray | [](imtreportapi_dealcreate.md "DealCreate") [](imtreportapi_dealget.md "DealGet") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::DealCreateArray
Create an object of the array of deals.
IMTDealArray* IMTReportAPI::DealCreateArray()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTDealArray](imtdealarray.md "IMTDealArray") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTDealArray::Release](imtdealarray_release.md "Release") method of this object.