# OrderPriceSL (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ OrderPriceSL | [](imtexecution_orderpricetrigger.md "OrderPriceTrigger") [](imtexecution_orderpricetp.md "OrderPriceTP") |
| --- | --- | --- |
| --- | --- |

IMTExecution::OrderPriceSL
Gets the Stop Loss level specified for an order in an external trading system.
C++
double IMTExecution::OrderPriceSL() const  
---  
.NET (Gateway/Manager API)
double CIMTExecution.OrderPriceSL()  
---  
Return Value
The Stop Loss level specified for an order in an external trading system.
IMTExecution::OrderPriceSL
Sets the Stop Loss level specified for an order in an external trading system.
C++
MTAPIRES IMTExecution::OrderPriceSL( const double price // Stop Loss level )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.OrderPriceSL( double price // Stop Loss level )  
---  
Parameters
price
[in] The Stop Loss level specified for an order in the external trading system.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.