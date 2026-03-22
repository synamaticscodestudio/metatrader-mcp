# DealGet (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Trade Databases ](imtreportapi_trade.md "Trade Database Functions") / [ Deals ](imtreportapi_deal.md "Deals")/ DealGet | [](imtreportapi_dealcreatearray.md "DealCreateArray") [](imtreportapi_dealselect.md "DealSelect") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::DealGet
Get a deal by a ticket.
MTAPIRES IMTReportAPI::DealGet( const UINT64 ticket, // The ticket of a deal IMTDeal* deal // An object of a deal )  
---  
Parameters
ticket
[in] The number (ticket) of a deal.
deal
[out] An object of a deal. The deal object must be first created using the [IMTReportAPI:DealCreate](imtreportapi_dealcreate.md "DealCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method copies the data of a deal with the specified ticket to the deal object. When calling this method Report API limits the end of the request time range by the time of the report generation ([IMTReportAPI::TimeGeneration](imtreportapi_timegeneration.md "TimeGeneration")).
IMTReportAPI::DealGet
Get the deals of a client in the specified date range.
MTAPIRES IMTReportAPI::DealGet( const UINT64 login, // Login const INT64 from, // Beginning of period const INT64 to, // End of period IMTDealArray* deals // An object of the array of deals )  
---  
Parameters
login
[in] The login of the client, whose deals you need to get.
from
[in] The beginning of the period for which you need to get deals. The date is specified in seconds that have elapsed since 01.01.1970.
to
[in] The end of the period for which you need to get deals. The date is specified in seconds that have elapsed since 01.01.1970.
deals
[out] An object of the array of deals. The deals object must be first created using the [IMTReportAPI::DealCreateArray](imtreportapi_dealcreatearray.md "DealCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
When calling this method Report API limits the end of the request time range by the time of the report generation ([IMTReportAPI::TimeGeneration](imtreportapi_timegeneration.md "TimeGeneration")).