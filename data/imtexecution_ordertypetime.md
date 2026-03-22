# OrderTypeTime (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ OrderTypeTime | [](imtexecution_ordertimeexpiration.md "OrderTimeExpiration") [](imtexecution_orderpricetrigger.md "OrderPriceTrigger") |
| --- | --- | --- |
| --- | --- |

IMTExecution::OrderTypeTime
Gets order expiration type set in an external trading system.
C++
UINT IMTExecution::OrderTypeTime() const  
---  
.NET (Gateway/Manager API)
uint CIMTExecution.OrderTypeTime()  
---  
Return Value
A value of the [IMTOrder::EnOrderTime](imtorder_enum.htm#enordertime) enumeration.
IMTExecution::OrderTypeTime
Sets order expiration type set in an external trading system.
C++
MTAPIRES IMTExecution::OrderTypeTime( const UINT type // Expiration type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.OrderTypeTime( uint type // Expiration type )  
---  
Parameters
type
[in] Order expiration type. To pass the type, the [IMTOrder::EnOrderTime](imtorder_enum.htm#enordertime) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.