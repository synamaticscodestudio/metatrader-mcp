# ModeSync (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ History Synchronization ](config_historysync.md "History Synchronization") / [ IMTConHistorySync ](imtconhistorysync.md "IMTConHistorySync")/ ModeSync | [](imtconhistorysync_mode.md "Mode") [](imtconhistorysync_historydata.md "HistoryData") |
| --- | --- | --- |
| --- | --- |

IMTConHistorySync::ModeSync
Get the mode of history data synchronization.
C++
UINT IMTConHistorySync::ModeSync() const  
---  
.NET (Gateway/Manager API)
uint CIMTConHistorySync.ModeSync()  
---  
Python (Manager API)
MTConHistorySync.ModeSync  
---  
Return Value
A value from the [IMTConHistorySync::EnHistorySyncMode](imtconhistorysync_enum.htm#enhistorysyncmode) enumeration.
IMTConHistorySync::ModeSync
Set the mode of history data synchronization.
C++
MTAPIRES IMTConHistorySync::ModeSync( const UINT type // Synchronization mode )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConHistorySync.ModeSync( uint type // Synchronization mode )  
---  
Python (Manager API)
MTConHistorySync.ModeSync  
---  
Parameters
type
[in] History data synchronization mode is passed using the [IMTConHistorySync::EnHistorySyncMode](imtconhistorysync_enum.htm#enhistorymode) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.