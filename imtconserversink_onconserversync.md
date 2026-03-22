# OnConServerSync (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerSink ](imtconserversink.md "IMTConServerSink")/ OnConServerSync | [](imtconserversink_onconserverdelete.md "OnConServerDelete") [](config_plugins.md "Plugins") |
| --- | --- | --- |
| --- | --- |

IMTConServerSink::OnConServerSync
A handler of the event of synchronization of a server configuration.
C++
virtual void IMTConServerSink::OnConServerSync()  
---  
.NET (Gateway/Manager API)
virtual void CIMTConServerSink.OnConServerSync()  
---  
Note
This method is called by the API to notify that server configurations have been synchronized.
Server configuration synchronization is performed on Access, History, Trade and Backup servers during connection to the main server.