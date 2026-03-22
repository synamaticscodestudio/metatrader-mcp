# CurrencyBase (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ CurrencyBase | [](imtconsymbol_page.md "Page") [](imtconsymbol_currencybasedigits.md "CurrencyBaseDigits") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::CurrencyBase
Get the base currency of a symbol.
C++
LPCWSTR IMTConSymbol::CurrencyBase() const  
---  
.NET (Gateway/Manager API)
string CIMTConSymbol.CurrencyBase()  
---  
Python (Manager API)
MTConSymbol.CurrencyBase  
---  
Return Value
If successful, it returns a pointer to a string with the name of the symbol's base currency. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConSymbol](imtconsymbol.md "IMTConSymbol") object.
To use the string after the object removal (call of the [IMTConSymbol::Release](imtconsymbol_release.md "Release") method of this object), a copy of it should be created.
IMTConSymbol::CurrencyBase
Set the base currency of a symbol.
C++
MTAPIRES IMTConSymbol::CurrencyBase( LPCWSTR currency // Base currency )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.CurrencyBase( stirng currency // Base currency )  
---  
Python (Manager API)
MTConSymbol.CurrencyBase  
---  
Parameters
currency
[in] The base currency of a symbol.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum length of currency name is 16 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.