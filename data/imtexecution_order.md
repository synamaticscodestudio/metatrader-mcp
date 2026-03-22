# Order (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ Order | [](imtexecution_comment.md "Comment") [](imtexecution_orderexternalid.md "OrderExternalID") |
| --- | --- | --- |
| --- | --- |

IMTExecution::Order
Gets the number of an order in the MetaTrader 5 platform.
C++
UINT64 IMTExecution::Order() const  
---  
.NET (Gateway/Manager API)
ulong CIMTExecution.Order()  
---  
Return Value
The number of an order in the MetaTrader 5 platform.
Note
This is a required trade execution field.
IMTExecution::Order
Sets the number of an order in the MetaTrader 5 platform.
C++
MTAPIRES IMTExecution::Order( const UINT64 order // Order number )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.Order( ulong order // Order number )  
---  
Parameters
order
[in] The number of an order in the MetaTrader 5 platform.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This is a required trade execution field.