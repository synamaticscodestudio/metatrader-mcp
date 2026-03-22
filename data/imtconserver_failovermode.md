# FailoverMode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ FailoverMode | [](imtconserver_bindingsnext.md "BindingsNext") [](imtconserver_failovertimeout.md "FailoverTimeout") |
| --- | --- | --- |
| --- | --- |

IMTConServer::FailoverMode
Getting the [automated failover mode](https://support.metaquotes.net/en/docs/mt5/platform/components/backup_server/backup_server_switch).
C++
UINT IMTConServer::FailoverMode() const  
---  
.NET (Gateway/Manager API)
EnFailoverModes CIMTConServer.FailoverMode()  
---  
Python (Manager API)
MTConServer.FailoverMode  
---  
Return Value
Obe of the values of the [IMTConServer::EnFailoverModes](imtconserver_enum.htm#enfailovermodes) enumeration.
IMTConServer::FailoverMode
Setting the [automated failover mode](https://support.metaquotes.net/en/docs/mt5/platform/components/backup_server/backup_server_switch).
C++
MTAPIRES IMTConServer::FailoverMode( const UINT type // Failover mode )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServer.FailoverMode( EnFailoverModes type // Failover mode )  
---  
Python (Manager API)
MTConServer.FailoverMode  
---  
You should use these inputs;
type
[in] The [IMTConServer::EnFailoverModes](imtconserver_enum.htm#enfailovermodes) enumeration is used to pass the failover mode.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.