# Order (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ Order | [](imtrequest_volumecurrentext.md "VolumeCurrentExt") [](imtrequest_orderexternalid.md "OrderExternalID") |
| --- | --- | --- |
| --- | --- |

IMTRequest::Order
Get the ticket of an order in a trade request.
C++
UINT64 IMTRequest::Order() const  
---  
.NET (Gateway/Manager API)
ulong CIMTRequest.Order()  
---  
Return Value
The ticket of an order in a trade request.
IMTRequest::Order
Set the ticket of an order in a trade request.
C++
MTAPIRES IMTRequest::Order( const UINT64 order // Order ticket )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequest.Order( ulong order // Order ticket )  
---  
Parameters
order
[in] The ticket of an order in a trade request.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.