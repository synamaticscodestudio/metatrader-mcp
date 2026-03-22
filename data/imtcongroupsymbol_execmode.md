# ExecMode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ ExecMode | [](imtcongroupsymbol_trademodedefault.md "TradeModeDefault") [](imtcongroupsymbol_execmodedefault.md "ExecModeDefault") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::ExecMode
Get the symbol execution mode for the group.
C++
UINT IMTConGroupSymbol::ExecMode() const  
---  
.NET (Gateway/Manager API)
EnExecutionMode CIMTConGroupSymbol.ExecMode()  
---  
Python (Manager API)
MTConGroupSymbol.ExecMode  
---  
Return Value
One of the values of the [IMTConSymbol::EnExecutionMode](imtconsymbol_enum.htm#enexecutionmode) enumeration.
IMTConGroupSymbol::ExecMode
Set the symbol execution mode for the group.
C++
MTAPIRES IMTConGroupSymbol::ExecMode( const UINT mode // Execution mode )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupSymbol.ExecMode( EnExecutionMode mode // Execution mode )  
---  
Python (Manager API)
MTConGroupSymbol.ExecMode  
---  
Parameters
mode
[in] To pass the execution mode, the [IMTConSymbol::EnExecutionMode](imtconsymbol_enum.htm#enexecutionmode) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.