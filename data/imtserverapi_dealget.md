# DealGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Deals ](serverapi_trading_deal.md "Deals")/ DealGet | [](imtserverapi_dealdeletebatch.md "DealDeleteBatch") [](imtserverapi_dealgetbygroup.md "DealGetByGroup") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DealGet
Get a deal by a ticket.
MTAPIRES IMTServerAPI::DealGet( const UINT64 ticket, // The ticket of a deal IMTDeal* deal // An object of a deal )  
---  
Parameters
ticket
[in] The number (ticket) of a deal.
deal
[out] An object of a deal. The deal object must be first created using the [IMTServerAPI::DealCreate](imtserverapi_dealcreate.md "DealCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method copies the data of a deal with the specified ticket to the deal object.
IMTServerAPI::DealGet
Get the deals of a client in the specified date range.
MTAPIRES IMTServerAPI::DealGet( const INT64 from, // Beginning of period const INT64 to, // End of period const UINT64 login, // Login IMTDealArray* deals // An object of the array of deals )  
---  
Parameters
from
[in] The beginning of the period for which you need to get deals. The date is specified in seconds that have elapsed since 01.01.1970.
to
[in] The end of the period for which you need to get deals. The date is specified in seconds that have elapsed since 01.01.1970.
login
[in] The login of the client, whose deals you need to get.
deals
[out] An object of the array of deals. The deals object must be first created using the [IMTServerAPI::DealCreateArray](imtserverapi_dealcreatearray.md "DealCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.