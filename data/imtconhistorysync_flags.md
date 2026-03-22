# Flags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ History Synchronization ](config_historysync.md "History Synchronization") / [ IMTConHistorySync ](imtconhistorysync.md "IMTConHistorySync")/ Flags | [](imtconhistorysync_symbolnext.md "SymbolNext") [](imtconhistorysyncsink.md "IMTConHistorySyncSink") |
| --- | --- | --- |
| --- | --- |

IMTConHistorySync::Flags
Gets data synchronization flags.
C++
UINT64 IMTConHistorySync::Flags() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConHistorySync.Flags()  
---  
Python (Manager API)
MTConHistorySync.Flags  
---  
Return Value
A value from the [IMTConHistorySync::EnHistorySyncFlags](imtconhistorysync_enum.htm#enhistorysyncflags) enumeration.
IMTConHistorySync::Flags
Sets data synchronization flags.
C++
MTAPIRES IMTConHistorySync::Flags( const UINT64 flags // Flags )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConHistorySync.Flags( ulong flags // Flags )  
---  
Python (Manager API)
MTConHistorySync.Flags  
---  
Parameters
mode
[in] Data synchronization flags are passed using the [IMTConHistorySync::EnHistorySyncFlags](imtconhistorysync_enum.htm#enhistorysyncflags) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.