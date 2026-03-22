# Digits (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ Digits | [](imtconsymbol_colorbackground.md "ColorBackground") [](imtconsymbol_point.md "Point") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::Digits
Get the number of decimal places in the price of the symbol.
C++
UINT IMTConSymbol::Digits() const  
---  
.NET (Gateway/Manager API)
uint CIMTConSymbol.Digits()  
---  
Python (Manager API)
MTConSymbol.Digits  
---  
Return Value
The number of decimal places in the price of the symbol.
IMTConSymbol::Digits
Set the number of decimal places in the price of the symbol.
C++
MTAPIRES IMTConSymbol::Digits( UINT digits // Number of decimal places )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.Digits( uint digits // Number of decimal places )  
---  
Python (Manager API)
MTConSymbol.Digits  
---  
Parameters
digits
[in] The number of decimal places in the price of the symbol.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.