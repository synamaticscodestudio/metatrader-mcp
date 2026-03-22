# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ History Synchronization ](config_historysync.md "History Synchronization") / [ IMTConHistorySync ](imtconhistorysync.md "IMTConHistorySync")/ Assign | [](imtconhistorysync_release.md "Release") [](imtconhistorysync_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConHistorySync::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConHistorySync::Assign( const IMTConHistorySync* param // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConHistorySync.Assign( CIMTConHistorySync param // Source object )  
---  
Parameters
param
Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.