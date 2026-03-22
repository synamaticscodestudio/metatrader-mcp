# HookSymbolAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbolSink ](imtconsymbolsink.md "IMTConSymbolSink")/ HookSymbolAdd | [](imtconsymbolsink_onsymbolsync.md "OnSymbolSync") [](imtconsymbolsink_hooksymbolupdate.md "HookSymbolUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConSymbolSink::HookSymbolAdd
Hook for adding of the new symbol.
C++
virtual MTAPIRES IMTConSymbolSink::HookSymbolAdd( const UINT64 login, // Manager login IMTConSymbol* new_cfg // A pointer to the symbol object )  
---  
.NET (Gateway/Manager API)
virtual MTRetCode CIMTConSymbolSink.HookSymbolAdd( ulong login, // Manager login CIMTConSymbol  new_cfg // Symbol object )  
---  
Parameters
login
[in] [The login of the manager](imtconmanager_login.md "Login"), who is adding the new symbol. If the new symbol is being added by the plugin, 0 is specified in the parameter.
new_cfg
[in/out] A pointer the [object of the symbol to be added](imtconsymbol.md "IMTConSymbol").
Return Value
In case there are no handlers if this event, [MT_RET_OK](retcodes_successful.md "Successful completion") is returned.
If the event handler returns a code different from [MT_RET_OK](retcodes_successful.md "Successful completion"), the symbol will not be added and the hook will not be passed to other handlers (including other plugins).
Note
The hook is called right before adding a symbol configuration to the client base. The main purpose of this hook is to modify an entry that is added, and, if necessary, to prevent the addition of unwanted records.
This method can only be used in the MetaTrader 5 Server API.