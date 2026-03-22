# OrderTimeExpiration (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ OrderTimeExpiration | [](imtexecution_ordertypefill.md "OrderTypeFill") [](imtexecution_ordertypetime.md "OrderTypeTime") |
| --- | --- | --- |
| --- | --- |

IMTExecution::OrderTimeExpiration
Gets order expiration time set in an external trading system.
C++
INT64 IMTExecution::OrderTimeExpiration() const  
---  
.NET (Gateway/Manager API)
long CIMTExecution.OrderTimeExpiration()  
---  
Return Value
Date and time of the expiration of an order, in seconds that have elapsed since 01.01.1970. The 0 value means that the order has no expiration.
IMTExecution::OrderTimeExpiration
Sets order expiration time set in an external trading system.
C++
MTAPIRES IMTExecution::OrderTimeExpiration( const INT64 time // Expiration time )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.OrderTimeExpiration( long time // Expiration time )  
---  
Parameters
time
[in] Date and time of the expiration of an order, in seconds that have elapsed since 01.01.1970. The 0 value means that the order has no expiration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.