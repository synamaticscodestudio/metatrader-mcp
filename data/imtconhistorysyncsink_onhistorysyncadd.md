# OnHistorySyncAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ History Synchronization ](config_historysync.md "History Synchronization") / [ IMTConHistorySyncSink ](imtconhistorysyncsink.md "IMTConHistorySyncSink")/ OnHistorySyncAdd | [](imtconhistorysyncsink.md "IMTConHistorySyncSink") [](imtconhistorysyncsink_onhistorysyncupdate.md "OnHistorySyncUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConHistorySyncSink::OnHistorySyncAdd
A handler of the event of adding a new configuration of history data synchronization.
C++
virtual void IMTConHistorySyncSink::OnHistorySyncAdd( const IMTConHistorySync* config // A pointer to the configuration object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConHistorySyncSink.OnHistorySyncAdd( CIMTConHistorySync  config // Configuration object )  
---  
Parameters
config
[in] A pointer to the object of the added configuration of data synchronization.
Note
This method is called by the API to notify that a new configuration of history data synchronization has been added.