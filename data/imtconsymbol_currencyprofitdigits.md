# CurrencyProfitDigits (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ CurrencyProfitDigits | [](imtconsymbol_currencyprofit.md "CurrencyProfit") [](imtconsymbol_currencyprofitdigitsset.md "CurrencyProfitDigitsSet") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::CurrencyProfitDigits
Get the accuracy of conversion into the profit currency.
C++
UINT IMTConSymbol::CurrencyProfitDigits() const  
---  
.NET (Gateway/Manager API)
uint CIMTConSymbol.CurrencyProfitDigits()  
---  
Python (Manager API)
MTConSymbol.CurrencyProfitDigits  
---  
Return Value
The number of decimal places in the rate of conversion to the profit currency.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConSymbol](imtconsymbol.md "IMTConSymbol") object.
To use the string after the object removal (call of the [IMTConSymbol::Release](imtconsymbol_release.md "Release") method of this object), a copy of it should be created.
You can set the accuracy by using the [IMTConSymbol::CurrencyProfitDigitsSet](imtconsymbol_currencyprofitdigitsset.md "CurrencyProfitDigitsSet") method.