# Symbol (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrder ](imtorder.md "IMTOrder")/ Symbol | [](imtorder_dealer.md "Dealer") [](imtorder_digits.md "Digits") |
| --- | --- | --- |
| --- | --- |

IMTOrder::Symbol
Gets the symbol of an order.
C++
LPCWSTR IMTOrder::Symbol() const  
---  
.NET (Gateway/Manager API)
string CIMTOrder.Symbol()  
---  
Python
MTOrder.Symbol  
---  
Return Value
If successful, it returns a pointer to a string with the name and path to the symbol. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTOrder](imtorder.md "IMTOrder") object.
To use the string after the object removal (call of the [IMTOrder::Release](imtorder_release.md "Release") method of this object), a copy of it should be created.
IMTOrder::Symbol
Set the symbol of an order.
C++
MTAPIRES IMTOrder::Symbol( LPCWSTR symbol // Symbol )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOrder.Symbol( string symbol // Symbol )  
---  
Python
MTOrder.Symbol  
---  
Parameters
symbol
[in] A trading instrument of an order.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
[IMTConSymbol::Symbol](imtconsymbol_symbol.md "Symbol") value is used as the symbol name.