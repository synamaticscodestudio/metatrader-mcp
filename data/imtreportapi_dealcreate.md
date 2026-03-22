# DealCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Trade Databases ](imtreportapi_trade.md "Trade Database Functions") / [ Deals ](imtreportapi_deal.md "Deals")/ DealCreate | [](imtreportapi_deal.md "Deals") [](imtreportapi_dealcreatearray.md "DealCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::DealCreate
Create an object of a deal.
IMTDeal* IMTReportAPI::DealCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTDeal](imtdeal.md "IMTDeal") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTDeal::Release](imtdeal_release.md "Release") method of this object.