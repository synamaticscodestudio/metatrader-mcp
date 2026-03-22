# GTCMode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ GTCMode | [](imtconsymbol_execmode.md "ExecMode") [](imtconsymbol_fillflags.md "FillFlags") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::GTCMode
Get the mode of keeping the orders at a trade day change.
C++
UINT IMTConSymbol::GTCMode() const  
---  
.NET (Gateway/Manager API)
EnGTCMode CIMTConSymbol.GTCMode()  
---  
Python (Manager API)
MTConSymbol.GTCMode  
---  
Return Value
A value of the [IMTConSymbol::EnGTCMode](imtconsymbol_enum.htm#engtcmode) enumeration.
IMTConSymbol::GTCMode
Set the mode of keeping the orders at a trade day change.
C++
MTAPIRES IMTConSymbol::GTCMode( const UINT mode // Mode of keeping orders )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.GTCMode( EnGTCMode mode // Mode of keeping orders )  
---  
Python (Manager API)
MTConSymbol.GTCMode  
---  
Parameters
mode
[in] To pass the mode of keeping the orders, the [IMTConSymbol::EnGTCMode](imtconsymbol_enum.htm#engtcmode) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.