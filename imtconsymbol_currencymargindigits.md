# CurrencyMarginDigits (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ CurrencyMarginDigits | [](imtconsymbol_currencymargin.md "CurrencyMargin") [](imtconsymbol_currencymargindigitsset.md "CurrencyMarginDigitsSet") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::CurrencyMarginDigits
Get the accuracy of conversion into the margin currency.
C++
UINT IMTConSymbol::CurrencyMarginDigits() const  
---  
.NET (Gateway/Manager API)
uint CIMTConSymbol.CurrencyMarginDigits()  
---  
Python (Manager API)
MTConSymbol.CurrencyMarginDigits  
---  
Return Value
The number of decimal places in the rate of conversion to the margin currency.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConSymbol](imtconsymbol.md "IMTConSymbol") object.
To use the string after the object removal (call of the [IMTConSymbol::Release](imtconsymbol_release.md "Release") method of this object), a copy of it should be created.
You can set the accuracy by using the [IMTConSymbol::CurrencyMarginDigitsSet](imtconsymbol_currencymargindigitsset.md "CurrencyMarginDigitsSet") method.