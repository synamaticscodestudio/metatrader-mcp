# OnHistorySyncSync (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ History Synchronization ](config_historysync.md "History Synchronization") / [ IMTConHistorySyncSink ](imtconhistorysyncsink.md "IMTConHistorySyncSink")/ OnHistorySyncSync | [](imtconhistorysyncsink_onhistorysyncdelete.md "OnHistorySyncDelete") [](config_gateway.md "Gateways") |
| --- | --- | --- |
| --- | --- |

IMTConHistorySyncSink::OnHistorySyncSync
A handler of the event of synchronization of configurations of history data synchronization.
C++
virtual void IMTConHistorySyncSink::OnHistorySyncSync()  
---  
.NET (Gateway/Manager API)
virtual void CIMTConHistorySyncSink.OnHistorySyncSync()  
---  
Note
This method is called by API to notify that history data sync configurations have been synchronized.
Synchronization of configurations is performed on Access, History, Trade and Backup servers during connection to the main server.