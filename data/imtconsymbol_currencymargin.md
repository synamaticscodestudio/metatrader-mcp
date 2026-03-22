# CurrencyMargin (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ CurrencyMargin | [](imtconsymbol_currencyprofitdigitsset.md "CurrencyProfitDigitsSet") [](imtconsymbol_currencymargindigits.md "CurrencyMarginDigits") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::CurrencyMargin
Get the margin currency of a symbol.
C++
LPCWSTR IMTConSymbol::CurrencyMargin() const  
---  
.NET (Gateway/Manager API)
string CIMTConSymbol.CurrencyMargin()  
---  
Python (Manager API)
MTConSymbol.CurrencyMargin  
---  
Return Value
If successful, it returns a pointer to a string with the name of the margin currency of the symbol. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConSymbol](imtconsymbol.md "IMTConSymbol") object.
To use the string after the object removal (call of the [IMTConSymbol::Release](imtconsymbol_release.md "Release") method of this object), a copy of it should be created.
IMTConSymbol::CurrencyMargin
Set the margin currency of a symbol.
C++
MTAPIRES IMTConSymbol::CurrencyMargin( LPCWSTR currency // Margin currency )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.CurrencyMargin( string currency // Margin currency )  
---  
Python (Manager API)
MTConSymbol.CurrencyMargin  
---  
Parameters
currency
[in] The symbol margin currency.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum length of currency name is 16 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.