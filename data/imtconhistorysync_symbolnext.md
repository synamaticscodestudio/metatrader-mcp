# SymbolNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ History Synchronization ](config_historysync.md "History Synchronization") / [ IMTConHistorySync ](imtconhistorysync.md "IMTConHistorySync")/ SymbolNext | [](imtconhistorysync_symboltotal.md "SymbolTotal") [](imtconhistorysync_flags.md "Flags") |
| --- | --- | --- |
| --- | --- |

IMTConHistorySync::SymbolNext
Get a symbol for which history data are synchronized, based on the position in the list.
C++
LPCWSTR IMTConHistorySync::SymbolNext( const UINT pos // Position of the symbol ) const  
---  
.NET (Gateway/Manager API)
string CIMTConHistorySync.SymbolNext( uint  pos // Position of the symbol )  
---  
Python (Manager API)
MTConHistorySync.SymbolNext( pos # Position of the symbol )  
---  
Parameters
pos
[in] Position of the symbol in the list, starting with 0.
Return Value
If successful, it returns a pointer to a string with the symbol name and path to it in accordance with the hierarchy of symbols in the platform. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConHistorySync](imtconhistorysync.md "IMTConHistorySync") object.
To use the string after the object removal (call of the [IMTConHistorySync::Release](imtconhistorysync_release.md "Release") method of this object), a copy of it should be created.