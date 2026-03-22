# Symbol (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Spreads ](config_spread.md "Spreads") / [ IMTConSpreadLeg ](imtconspreadleg.md "IMTConSpreadLeg")/ Symbol | [](imtconspreadleg_mode.md "Mode") [](imtconspreadleg_timefrom.md "TimeFrom") |
| --- | --- | --- |
| --- | --- |

IMTConSpreadLeg::Symbol
Getting a trade symbol specified for a spread leg.
C++
LPCWSTR IMTConSpreadLeg::Symbol() const  
---  
.NET (Gateway/Manager API)
string CIMTConSpreadLeg.Symbol()  
---  
Python (Manager API)
MTConSpreadLeg.Symbol  
---  
Return Value
Spread leg symbol.
IMTConSpreadLeg::Symbol
Setting a spread leg symbol.
C++
MTAPIRES IMTConSpreadLeg::Symbol( LPCWSTR symbol // symbol )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSpreadLeg.Symbol( string symbol // symbol )  
---  
Python (Manager API)
MTConSpreadLeg.Symbol  
---  
Parameters
open
[in] Spread leg symbol.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
According to the symbols specification type ([IMTConSpreadLeg::Mode](imtconspreadleg_mode.md "Mode")) set for a spread leg, the name of a specific symbol ([IMTConSymbol::Symbol](imtconsymbol_symbol.md "Symbol")) or a basic asset ([IMTConSymbol::Basis](imtconsymbol_basis.md "Basis")) is specified in the method.