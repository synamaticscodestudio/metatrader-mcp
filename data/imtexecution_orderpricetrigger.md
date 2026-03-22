# OrderPriceTrigger (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ OrderPriceTrigger | [](imtexecution_ordertypetime.md "OrderTypeTime") [](imtexecution_orderpricesl.md "OrderPriceSL") |
| --- | --- | --- |
| --- | --- |

IMTExecution::OrderPriceTrigger
Gets the activation price of a stop-limit order set in an external trading system.
C++
double IMTExecution::OrderPriceTrigger() const  
---  
.NET (Gateway/Manager API)
double CIMTExecution.OrderPriceTrigger()  
---  
Return Value
Order activation price in an external trading system.
IMTExecution::OrderPriceTrigger
Sets the activation price of a stop-limit order set in an external trading system.
C++
MTAPIRES IMTExecution::OrderPriceTrigger( const double price // Order activation price )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.OrderPriceTrigger( double price // Order activation price )  
---  
Parameters
price
[in] Order activation price in an external trading system.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.