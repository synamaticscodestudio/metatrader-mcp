# Point (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ Point | [](imtconsymbol_digits.md "Digits") [](imtconsymbol_multiply.md "Multiply") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::Point
Get the size of the point.
C++
double IMTConSymbol::Point() const  
---  
.NET (Gateway/Manager API)
double CIMTConSymbol.Point()  
---  
Python (Manager API)
MTConSymbol.Point  
---  
Return Value
Size of one point of the price. Calculated as 1/10^Digits.