# Default (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ Default | [](imtcongroupsymbol_clear.md "Clear") [](imtcongroupsymbol_path.md "Path") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::Default
Set default values for all parameters of group [symbols](config_symbol.md "Symbols").
C++
MTAPIRES IMTConGroupSymbol::Default()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupSymbol.Default()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Default settings include the settings that are set for symbols in their [IMTConSymbol](imtconsymbol.md "IMTConSymbol") configuration.