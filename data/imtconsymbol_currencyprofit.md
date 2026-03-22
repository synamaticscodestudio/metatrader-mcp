# CurrencyProfit (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ CurrencyProfit | [](imtconsymbol_currencybasedigitsset.md "CurrencyBaseDigitsSet") [](imtconsymbol_currencyprofitdigits.md "CurrencyProfitDigits") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::CurrencyProfit
Get the profit currency for a symbol.
C++
LPCWSTR IMTConSymbol::CurrencyProfit() const  
---  
.NET (Gateway/Manager API)
string CIMTConSymbol.CurrencyProfit()  
---  
Python (Manager API)
MTConSymbol.CurrencyProfit  
---  
Return Value
If successful, it returns a pointer to a string with the name of the profit currency of the symbol. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConSymbol](imtconsymbol.md "IMTConSymbol") object.
To use the string after the object removal (call of the [IMTConSymbol::Release](imtconsymbol_release.md "Release") method of this object), a copy of it should be created.
IMTConSymbol::CurrencyProfit
Set the profit currency for a symbol.
C++
MTAPIRES IMTConSymbol::CurrencyProfit( LPCWSTR currency // Profit currency )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.CurrencyProfit( string currency // Profit currency )  
---  
Python (Manager API)
MTConSymbol.CurrencyProfit  
---  
Parameters
currency
[in] The symbol profit currency.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum length of currency name is 16 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.