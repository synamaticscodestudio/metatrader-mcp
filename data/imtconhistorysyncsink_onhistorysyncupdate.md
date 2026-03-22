# OnHistorySyncUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ History Synchronization ](config_historysync.md "History Synchronization") / [ IMTConHistorySyncSink ](imtconhistorysyncsink.md "IMTConHistorySyncSink")/ OnHistorySyncUpdate | [](imtconhistorysyncsink_onhistorysyncadd.md "OnHistorySyncAdd") [](imtconhistorysyncsink_onhistorysyncdelete.md "OnHistorySyncDelete") |
| --- | --- | --- |
| --- | --- |

IMTConHistorySyncSink::OnHistorySyncUpdate
A handler of the event of update of a configuration of history data synchronization.
C++
virtual void IMTConHistorySyncSink::OnHistorySyncUpdate( const IMTConHistorySync* config // A pointer to the configuration object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConHistorySyncSink.OnHistorySyncUpdate( CIMTConHistorySync  config // Configuration object )  
---  
Parameters
config
[in] A pointer to the object of the updated configuration of data synchronization.
Note
This method is called by the API to notify that a configuration of data synchronization has been updated.