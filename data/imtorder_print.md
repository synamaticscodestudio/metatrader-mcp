# Print (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrder ](imtorder.md "IMTOrder")/ Print | [](imtorder_clear.md "Clear") [](imtorder_order.md "Order") |
| --- | --- | --- |
| --- | --- |

IMTOrder::Print
Get the string description of an order.
C++
LPCWSTR IMTOrder::Print( MTAPISTR& string // The order description string ) const  
---  
.NET (Gateway/Manager API)
string CIMTOrder.Print()  
---  
Python
MTOrder.Print()  
---  
Parameters
string
[out] The order description string.
Return Value
A pointer to string that is passed as a parameter.
Note
The description string does not include the login of the client, to whom the order belongs.