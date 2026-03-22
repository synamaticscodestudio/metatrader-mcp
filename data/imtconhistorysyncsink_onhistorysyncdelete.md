# OnHistorySyncDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ History Synchronization ](config_historysync.md "History Synchronization") / [ IMTConHistorySyncSink ](imtconhistorysyncsink.md "IMTConHistorySyncSink")/ OnHistorySyncDelete | [](imtconhistorysyncsink_onhistorysyncupdate.md "OnHistorySyncUpdate") [](imtconhistorysyncsink_onhistorysyncsync.md "OnHistorySyncSync") |
| --- | --- | --- |
| --- | --- |

IMTConHistorySyncSink::OnHistorySyncDelete
A handler of the event of deletion of a configuration of history data synchronization.
C++
virtual void IMTConHistorySyncSink::OnHistorySyncDelete( const IMTConHistorySync* config // A pointer to the configuration object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConHistorySyncSink.OnHistorySyncDelete( CIMTConHistorySync  config // Configuration object )  
---  
Parameters
config
[in] A pointer to the object of the deleted configuration of data synchronization.
Note
This method is called by the API to notify that a new configuration of history data synchronization has been deleted.