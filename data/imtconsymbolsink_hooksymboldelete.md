# HookSymbolDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbolSink ](imtconsymbolsink.md "IMTConSymbolSink")/ HookSymbolDelete | [](imtconsymbolsink_hooksymbolupdate.md "HookSymbolUpdate") [](config_spread.md "Spreads") |
| --- | --- | --- |
| --- | --- |

IMTConSymbolSink::HookSymbolDelete
Symbol deletion hook.
C++
virtual MTAPIRES IMTConSymbolSink::HookSymbolDelete( const UINT64 login, // Manager login const IMTConSymbol* cfg // A pointer to the symbol object )  
---  
.NET (Gateway/Manager API)
virtual MTRetCode CIMTConSymbolSink.HookSymbolDelete( ulong login, // Manager login CIMTConSymbol  cfg // Symbol object )  
---  
Parameters
login
[in] [The login of the manager](imtconmanager_login.md "Login") who is deleting the symbol. If the symbol is to be deleted by the plugin, 0 is specified in the parameter.
cfg
[in] A pointer to the [symbol object](imtconsymbol.md "IMTConSymbol").
Return Value
In case there are no handlers if this event, [MT_RET_OK](retcodes_successful.md "Successful completion") is returned.
If the event handler returns a code different from [MT_RET_OK](retcodes_successful.md "Successful completion"), the symbol will not be deleted and the hook will not be passed to other handlers (including other plugins).
Note
The hook is called right before deleting a record from the configuration database. The main purpose of this hook is prevent the unwanted deletion of records.
This method can only be used in the MetaTrader 5 Server API.