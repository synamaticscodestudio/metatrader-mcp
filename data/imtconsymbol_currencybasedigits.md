# CurrencyBaseDigits (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ CurrencyBaseDigits | [](imtconsymbol_currencybase.md "CurrencyBase") [](imtconsymbol_currencybasedigitsset.md "CurrencyBaseDigitsSet") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::CurrencyBaseDigits
Get the accuracy of conversion into the base currency.
C++
UINT IMTConSymbol::CurrencyBaseDigits() const  
---  
.NET (Gateway/Manager API)
uint CIMTConSymbol.CurrencyBaseDigits()  
---  
Python (Manager API)
MTConSymbol.CurrencyBaseDigits  
---  
Return Value
The number of decimal places in the rate of conversion to the base currency.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConSymbol](imtconsymbol.md "IMTConSymbol") object.
To use the string after the object removal (call of the [IMTConSymbol::Release](imtconsymbol_release.md "Release") method of this object), a copy of it should be created.
You can set the accuracy by using the [IMTConSymbol::CurrencyBaseDigitsSet](imtconsymbol_currencybasedigitsset.md "CurrencyBaseDigitsSet") method.