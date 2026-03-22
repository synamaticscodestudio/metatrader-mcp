# HookSymbolUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbolSink ](imtconsymbolsink.md "IMTConSymbolSink")/ HookSymbolUpdate | [](imtconsymbolsink_hooksymboladd.md "HookSymbolAdd") [](imtconsymbolsink_hooksymboldelete.md "HookSymbolDelete") |
| --- | --- | --- |
| --- | --- |

IMTConSymbolSink::HookSymbolUpdate
Hook for the update of symbol settings.
C++
virtual MTAPIRES IMTConSymbolSink::HookSymbolUpdate( const UINT64 login, // Manager login const IMTConSymbol* cfg, // A pointer to the current symbol IMTConSymbol* new_cfg // A pointer to the updated symbol )  
---  
.NET (Gateway/Manager API)
virtual MTRetCode CIMTConSymbolSink.HookSymbolUpdate( ulong login, // Manager login CIMTConSymbol  cfg, // Current symbol CIMTConSymbol  new_cfg // Updated symbol )  
---  
Parameters
login
[in] [The login of the manager](imtconmanager_login.md "Login"), who is going to update the symbol settings. If the symbol is to be updated by the plugin, 0 is specified in the parameter.
cfg
[in] A pointer to the [current symbol object](imtconsymbol.md "IMTConSymbol").
new_cfg
[out] A pointer to the [symbol object](imtconsymbol.md "IMTConSymbol") after making change.
Return Value
In case there are no handlers if this event, [MT_RET_OK](retcodes_successful.md "Successful completion") is returned.
If the event handler returns a code different from [MT_RET_OK](retcodes_successful.md "Successful completion"), the symbol will not be updated and the hook will not be passed to other handlers (including other plugins).
Note
The hook is called right before making changes to the configuration database. The main purpose of this hook is to modify an entry that is being updated, and, if necessary, to prevent the unwanted change of records.
This method can only be used in the MetaTrader 5 Server API.