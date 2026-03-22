# OrderPrice (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ OrderPrice | [](imtexecution_ordervolumeext.md "OrderVolumeExt") [](imtexecution_orderactivationflags.md "OrderActivationFlags") |
| --- | --- | --- |
| --- | --- |

IMTExecution::OrderPrice
Gets an order price.
C++
double IMTExecution::OrderPrice() const  
---  
.NET (Gateway/Manager API)
double CIMTExecution.OrderPrice()  
---  
Return Value
Order price.
IMTExecution::OrderPrice
Set the order price.
C++
MTAPIRES IMTExecution::OrderPrice( const double price // Order price )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.OrderPrice( double price // Order price )  
---  
Parameters
price
[in] Order price.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.