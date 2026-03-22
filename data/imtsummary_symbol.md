# Symbol (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Summary Positions ](trading_summary.md "Summary Positions") / [ IMTSummary ](imtsummary.md "IMTSummary")/ Symbol | [](imtsummary_clear.md "Clear") [](imtsummary_digits.md "Digits") |
| --- | --- | --- |
| --- | --- |

IMTSummary::Symbol
Gets the symbol, for which summary positions are calculated.
C++
LPCWSTR IMTSummary::Symbol() const  
---  
.NET (Gateway/Manager API)
string CIMTSummary.Symbol()  
---  
Return Value
If successful, it returns a pointer to a string with the name of the symbol. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTSummary](imtsummary.md "IMTSummary") object.
To use the string after the object removal (call of the [IMTSummary::Release](imtsummary_release.md "Release") method of this object), a copy of it should be created.
[IMTConSymbol::Symbol](imtconsymbol_symbol.md "Symbol") value is used as the symbol name.