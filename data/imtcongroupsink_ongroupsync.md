# OnGroupSync (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSink ](imtcongroupsink.md "IMTConGroupSink")/ OnGroupSync | [](imtcongroupsink_ongroupdelete.md "OnGroupDelete") [](imtcongroupsink_hookgroupadd.md "HookGroupAdd") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSink::OnGroupSync
A handler of the event of groups synchronization.
C++
virtual void IMTConGroupSink::OnGroupSync()  
---  
.NET (Gateway/Manager API)
virtual void CIMTConGroupSink.OnGroupSync()  
---  
Note
This method is called by the API to notify of synchronization of groups.
Synchronization of group configurations is performed on Access, History, Trade and Backup servers during connection to the main server.