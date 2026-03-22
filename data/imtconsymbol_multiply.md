# Multiply (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ Multiply | [](imtconsymbol_point.md "Point") [](imtconsymbol_tickflags.md "TickFlags") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::Multiply
Get the value to multiply the price to, to get the number of points.
C++
double IMTConSymbol::Multiply() const  
---  
.NET (Gateway/Manager API)
double CIMTConSymbol.Multiply()  
---  
Python (Manager API)
MTConSymbol.Multiply  
---  
Return Value
The value to multiply the price to, to get the number of points. Calculated as 10^Digits.