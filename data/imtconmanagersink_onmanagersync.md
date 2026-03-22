# OnManagerSync (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Managers ](config_manager.md "Managers") / [ IMTConManagerSink ](imtconmanagersink.md "IMTConManagerSink")/ OnManagerSync | [](imtconmanagersink_onmanagerdelete.md "OnManagerDelete") [](imtconmanagersink_hookmanageradd.md "HookManagerAdd") |
| --- | --- | --- |
| --- | --- |

IMTConManagerSink::OnManagerSync
A handler of the event of synchronization of manager configurations.
C++
virtual void IMTConManagerSink::OnManagerSync()  
---  
.NET (Gateway/Manager API)
virtual void CIMTConManagerSink.OnManagerSync()  
---  
Note
This method is called by the API to notify that manager configurations have been synchronized.
Synchronization of the manager configurations is performed on Access, History, Trade and Backup servers during connection to the main server.