# ExecMode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ ExecMode | [](imtconsymbol_calcmode.md "CalcMode") [](imtconsymbol_gtcmode.md "GTCMode") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::ExecMode
Get the execution mode for a symbol.
C++
UINT IMTConSymbol::ExecMode() const  
---  
.NET (Gateway/Manager API)
EnExecutionMode CIMTConSymbol.ExecMode()  
---  
Python (Manager API)
MTConSymbol.ExecMode  
---  
Return Value
One of the values of the [IMTConSymbol::EnExecutionMode](imtconsymbol_enum.htm#enexecutionmode) enumeration.
IMTConSymbol::ExecMode
Set the execution mode for a symbol.
C++
MTAPIRES IMTConSymbol::ExecMode( const UINT mode // Execution mode )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.ExecMode( EnExecutionMode mode // Execution mode )  
---  
Python (Manager API)
MTConSymbol.ExecMode  
---  
Parameters
mode
[in] To pass the execution mode, the [IMTConSymbol::EnExecutionMode](imtconsymbol_enum.htm#enexecutionmode) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.