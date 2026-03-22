# ServersUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAccess ](imtconserveraccess.md "IMTConServerAccess")/ ServersUpdate | [](imtconserveraccess_serversadd.md "ServersAdd") [](imtconserveraccess_serversshift.md "ServersShift") |
| --- | --- | --- |
| --- | --- |

IMTConServerAccess::ServersUpdate
Update a trade server, the connection to which will be implemented through this Access Server.
C++
MTAPIRES IMTConServerAccess::ServersUpdate( const UINT pos, // Position of the trade server UINT64 server_id // The updated ID )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAccess.ServersUpdate( uint pos, // Position of the trade server ulong server_id // The updated ID )  
---  
Python (Manager API)
MTConServerAccess.ServersUpdate( pos, # Position of the trade server server_id # The updated ID )  
---  
Parameters
pos
[in] Position of the trade server in the list, starting with 0.
server_id
[in] The updated ID of the trade server.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.