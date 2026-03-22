# OptionsMode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ OptionsMode | [](imtconsymbol_chartmode.md "ChartMode") [](imtconsymbol_pricestrike.md "PriceStrike") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::OptionsMode
Getting the option type and style.
C++
UINT IMTConSymbol::OptionsMode() const  
---  
.NET (Gateway/Manager API)
EnOptionMode CIMTConSymbol.OptionsMode()  
---  
Python (Manager API)
MTConSymbol.OptionsMode  
---  
Return Value
One of the value of the [IMTConSymbol::EnOptionMode](imtconsymbol_enum.htm#enoptionmode) enumeration.
IMTConSymbol::OptionsMode
Setting the option type and style.
C++
MTAPIRES IMTConSymbol::OptionsMode( const UINT mode // The option type and style )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.OptionsMode( EnOptionMode mode // The option type and style )  
---  
Python (Manager API)
MTConSymbol.OptionsMode()  
---  
Parameters
mode
[in] To pass the option type and style, the [IMTConSymbol::EnOptionMode](imtconsymbol_enum.htm#enoptionmode) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.