# BackupServer (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ BackupServer | [](imtconserver_accessserver.md "AccessServer") [](imtconserver_antiddosserver.md "AntiDDoSServer") |
| --- | --- | --- |
| --- | --- |

IMTConServer::BackupServer
The interface of the Backup Server.
C++
IMTConServerBackup* IMTConServer::BackupServer()  
---  
.NET (Gateway/Manager API)
CIMTConServerBackup CIMTConServer.BackupServer()  
---  
Python (Manager API)
MTConServer.BackupServer()  
---  
Return Value
It returns a pointer to the object that implements the [IMTConServerBackup](imtconserverbackup.md "IMTConServerBackup") interface. In case of failure, it returns NULL.
Note
The server type [IMTConServer::Type()](imtconserver_type.md "Type") defines what specific parameters the server has.
An interface obtained using this method does not require to be released, as it is passed as a pointer to an internal object of the [IMTConServer](imtconserver.md "IMTConServer") interface. Accordingly, after the release of IMTConServer (call of [IMTConServer::Release](imtconserver_release.md "Release")), the interface obtained by this method becomes invalid.