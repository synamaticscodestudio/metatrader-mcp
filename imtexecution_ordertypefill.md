# OrderTypeFill (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ OrderTypeFill | [](imtexecution_orderactivationmode.md "OrderActivationMode") [](imtexecution_ordertimeexpiration.md "OrderTimeExpiration") |
| --- | --- | --- |
| --- | --- |

IMTExecution::OrderTypeFill
Gets order filling type set in an external trading system.
C++
UINT IMTExecution::OrderTypeFill() const  
---  
.NET (Gateway/Manager API)
uint CIMTExecution.OrderTypeFill()  
---  
Return Value
A value of the [IMTOrder::EnOrderFilling](imtorder_enum.htm#enorderfilling) enumeration.
IMTExecution::OrderTypeFill
Sets order filling type set in an external trading system.
C++
MTAPIRES IMTExecution::OrderTypeFill( const UINT type // Type of filling )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.OrderTypeFill( uint type // Type of filling )  
---  
Parameters
type
[in] Order filling type. To pass the type, the [IMTOrder::EnOrderFilling](imtorder_enum.htm#enorderfilling) enumeration is used..
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.