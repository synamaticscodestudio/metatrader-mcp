# DealRequestByTickets (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Deals ](imtadminapi_trading_deal.md "Functions")/ DealRequestByTickets | [](imtadminapi_dealrequestbyloginssymbol.md "DealRequestByLoginsSymbol") [](imtadminapi_dealrequestpage.md "DealRequestPage") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::DealRequestByTickets
Receive deals by the list of tickets.
C++
MTAPIRES IMTAdminAPI::DealRequestByTickets( const UINT64* tickets, // Tickets const UINT tickets_total,// Number of tickets IMTDealArray* deals // Array of deals )  
---  
.NET
MTRetCode CIMTAdminAPI.DealRequestByTickets( ulong[] tickets, // Tickets CIMTDealArray deals // Array of deals )  
---  
Python
AdminAPI.DealRequestByTickets( tickets # Tickets )  
---  
AdminAPI.DealRequestByTicketsCSV( tickets, # Tickets fields # Comma-separated list of required fields )  
---  
AdminAPI.DealRequestByTicketsNumPy( tickets, # Tickets fields # Comma-separated list of required fields )  
---  
Parameters
tickets
[in] Array of tickets of the deals which you want to receive.
tickets_total
[in] The number of tickets in the 'tickets' array.
deals
[out] An object of the deals array. The 'deals' object must be first created using [IMTAdminAPI::DealCreateArray](imtadminapi_dealcreatearray.md "DealCreateArray").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method copies deals with the specified tickets into the 'deals' object.
The method cannot be called from event handlers (any IMT*Sink class methods).