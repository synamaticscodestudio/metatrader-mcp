# DealGetByTickets (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Deals ](serverapi_trading_deal.md "Deals")/ DealGetByTickets | [](imtserverapi_dealgetbyloginssymbol.md "DealGetByLoginsSymbol") [](imtserverapi_dealselectbygroup.md "DealSelectByGroup") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DealGetByTickets
Receive deals by the list of tickets.
MTAPIRES IMTServerAPI::DealGetByTickets( const UINT64* tickets, // Tickets const UINT tickets_total,// Number of tickets IMTDealArray* deals // Array of deals )  
---  
Parameters
tickets
[in] Array of tickets of the deals which you want to receive.
tickets_total
[in] The number of tickets in the 'tickets' array.
deals
[out] An object of the deals array. The 'deals' object must be first created using [IMTServerAPI::DealCreateArray](imtserverapi_dealcreatearray.md "DealCreateArray").
Returned Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method copies deals with the specified tickets into the 'deals' object.
The method cannot be called from event handlers (any IMT*Sink class methods).