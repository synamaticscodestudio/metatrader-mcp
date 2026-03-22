# DealRequestByTickets (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Deals ](imtmanagerapi_trading_deal.md "Deals")/ DealRequestByTickets | [](imtmanagerapi_dealrequestbyloginssymbol.md "DealRequestByLoginsSymbol") [](imtmanagerapi_dealrequestpage.md "DealRequestPage") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::DealRequestByTickets
Receive deals by the list of tickets.
C++
MTAPIRES IMTManagerAPI::DealRequestByTickets( const UINT64* tickets, // Tickets const UINT tickets_total,// Number of tickets IMTDealArray* deals // Array of deals )  
---  
.NET
MTRetCode CIMTManagerAPI.DealRequestByTickets( ulong[] tickets, // Tickets CIMTDealArray deals // Array of deals )  
---  
Python
ManagerAPI.DealRequestByTickets( tickets # Tickets )  
---  
ManagerAPI.DealRequestByTicketsCSV( tickets, # Tickets fields # Comma-separated list of required fields )  
---  
ManagerAPI.DealRequestByTicketsNumPy( tickets, # Tickets fields # Comma-separated list of required fields )  
---  
Parameters
tickets
[in] Array of tickets of the deals which you want to receive.
tickets_total
[in] The number of tickets in the 'tickets' array.
deals
[out] An object of the deals array. The 'deals' object must be first created using [IMTManagerAPI::DealCreateArray](imtmanagerapi_dealcreatearray.md "DealCreateArray").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method copies deals with the specified tickets into the 'deals' object.
The method cannot be called from event handlers (any IMT*Sink class methods).