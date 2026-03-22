# State (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrder ](imtorder.md "IMTOrder")/ State | [](imtorder_contractsize.md "ContractSize") [](imtorder_stateset.md "StateSet") |
| --- | --- | --- |
| --- | --- |

IMTOrder::State
Get the current state of an order.
C++
UINT IMTOrder::State() const  
---  
.NET (Gateway/Manager API)
uint CIMTOrder.State()  
---  
Python
MTOrder.State  
---  
Return Value
A value of the [IMTOrder::EnOrderState](imtorder_enum.htm#enorderstate) enumeration.