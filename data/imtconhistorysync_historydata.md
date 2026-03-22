# HistoryData (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ History Synchronization ](config_historysync.md "History Synchronization") / [ IMTConHistorySync ](imtconhistorysync.md "IMTConHistorySync")/ HistoryData | [](imtconhistorysync_modesync.md "ModeSync") [](imtconhistorysync_timecorrection.md "TimeCorrection") |
| --- | --- | --- |
| --- | --- |

IMTConHistorySync::HistoryData
Getting the type of data used in synchronization.
C++
UINT IMTConHistorySync::HistoryData() const  
---  
.NET (Gateway/Manager API)
EnHistoryData CIMTConHistorySync.HistoryData()  
---  
Python (Manager API)
MTConHistorySync.HistoryData  
---  
Return Value
A value from the [IMTConHistorySync::EnHistoryData](imtconhistorysync_enum.htm#enhistorydata) enumeration.
IMTConHistorySync::HistoryData
Set the type of data to synchronize.
C++
MTAPIRES IMTConHistorySync::HistoryData( const UINT data // Data type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConHistorySync.HistoryData( EnHistoryData data // Data type )  
---  
Python (Manager API)
MTConHistorySync.HistoryData  
---  
Parameters
data
[in] The data type is passed using the [IMTConHistorySync::EnHistoryData](imtconhistorysync_enum.htm#enhistorydata) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.