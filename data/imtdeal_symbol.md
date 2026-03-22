# Symbol (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ Symbol | [](imtdeal_timemsc.md "TimeMsc") [](imtdeal_price.md "Price") |
| --- | --- | --- |
| --- | --- |

IMTDeal::Symbol
Get the symbol, for which a deal was executed.
C++
LPCWSTR IMTDeal::Symbol() const  
---  
.NET (Gateway/Manager API)
string CIMTDeal.Symbol()  
---  
Python
MTDeal.Symbol  
---  
Return Value
If successful, it returns a pointer to a string with the symbol name and path to it in accordance with the hierarchy of symbols in the platform. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTDeal](imtdeal.md "IMTDeal") object.
In order to use the string after the object removal (call of the [IMTDeal::Release](imtdeal_release.md "Release") method of this object), a copy of it should be created.
IMTDeal::Symbol
Set the symbol, for which a deal is executed.
C++
MTAPIRES IMTDeal::Symbol( LPCWSTR symbol // Symbol )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.Symbol( string symbol // Symbol )  
---  
Python
MTDeal.Symbol  
---  
Parameters
symbol
[in] The symbol, for which a deal is executed.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
[IMTConSymbol::Symbol](imtconsymbol_symbol.md "Symbol") value is used as the symbol name.