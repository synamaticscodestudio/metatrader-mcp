# FailoverTimeout (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ FailoverTimeout | [](imtconserver_failovermode.md "FailoverMode") [](imtconserver_clusterstatetotal.md "ClusterStateTotal") |
| --- | --- | --- |
| --- | --- |

IMTConServer::FailoverTimeout
Getting the downtime of the primary server, after which the platform [switches to a backup server](https://support.metaquotes.net/en/docs/mt5/platform/components/backup_server/backup_server_switch).
C++
UINT IMTConServer::FailoverTimeout() const  
---  
.NET (Gateway/Manager API)
uint CIMTConServer.FailoverTimeout()  
---  
Python (Manager API)
MTConServer.FailoverTimeout  
---  
Return Value
Timeout in seconds.
IMTConServer::FailoverTimeout
Setting the downtime of the primary server, after which the platform [switches to a backup server](https://support.metaquotes.net/en/docs/mt5/platform/components/backup_server/backup_server_switch).
C++
MTAPIRES IMTConServer::FailoverTimeout( const UINT timeout // Timeout )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServer.FailoverTimeout( uint timeout // Timeout )  
---  
Python (Manager API)
MTConServer.FailoverTimeout  
---  
You should use these inputs;
type
[in] Timeout in seconds.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.