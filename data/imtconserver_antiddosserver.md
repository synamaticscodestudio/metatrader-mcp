# AntiDDoSServer (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ AntiDDoSServer | [](imtconserver_backupserver.md "BackupServer") [](imtconserver_pointsadd.md "PointsAdd") |
| --- | --- | --- |
| --- | --- |

IMTConServer::AntiDDoSServer
The Anti DDoS server interface.
C++
IMTConServerBackup* IMTConServer::AntiDDoSServer()  
---  
.NET (Gateway/Manager API)
CIMTConServerBackup CIMTConServer.AntiDDoSServer()  
---  
Python (Manager API)
MTConServer.AntiDDoSServer()  
---  
Return Value
It returns a pointer to the object that implements the [IMTConServerAntiDDoS](imtconserverantiddos.md "IMTConServerAntiDDoS") interface. In case of failure, it returns NULL.
Note
Depending on the server type [IMTConServer::Type()](imtconserver_type.md "Type"), it is defined which specific parameters the server has.
An interface obtained using this method does not require to be released, as it is passed as a pointer to an internal object of the [IMTConServer](imtconserver.md "IMTConServer") interface. Accordingly, after the release of IMTConServer (call of [IMTConServer::Release](imtconserver_release.md "Release")), the interface obtained by this method becomes invalid.