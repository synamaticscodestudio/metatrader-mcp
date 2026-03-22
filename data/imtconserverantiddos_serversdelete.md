# ServersDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAntiDDoS ](imtconserverantiddos.md "IMTConServerAntiDDoS")/ ServersDelete | [](imtconserverantiddos_serversshift.md "ServersShift") [](imtconserverantiddos_serversclear.md "ServersClear") |
| --- | --- | --- |
| --- | --- |

IMTConServerAntiDDoS::ServersDelete
Delete from the list a trade server, the connection to which is implemented through this Anti DDoS server.
C++
MTAPIRES IMTConServerAntiDDoS::ServersDelete( const UINT pos // The position of the trade server )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAntiDDoS.ServersDelete( uint pos // The position of the trade server )  
---  
Python (Manager API)
MTConServerAntiDDoS.ServersDelete( pos # The position of the trade server )  
---  
Parameters
pos
[in] Position of the trade server in the list, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.