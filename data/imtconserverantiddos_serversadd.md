# ServersAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAntiDDoS ](imtconserverantiddos.md "IMTConServerAntiDDoS")/ ServersAdd | [](imtconserverantiddos_pointsnext.md "PointsNext") [](imtconserverantiddos_serversupdate.md "ServersUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConServerAntiDDoS::ServersAdd
Add a trade server, the connection to which will be implemented through this Anti DDoS server.
C++
MTAPIRES IMTConServerAntiDDoS::ServersAdd( const UINT64 server_id // Identifier )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAntiDDoS.ServersAdd( ulong server_id // Identifier )  
---  
Python (Manager API)
MTConServerAntiDDoS.ServersAdd( server_id # Identifier )  
---  
Parameters
server_id
[in] Trade server ID.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.