# ServersAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAccess ](imtconserveraccess.md "IMTConServerAccess")/ ServersAdd | [](imtconserveraccess_bindingsnext.md "BindingsNext") [](imtconserveraccess_serversupdate.md "ServersUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConServerAccess::ServersAdd
Add a trade server, the connection to which will be implemented through this Access Server.
C++
MTAPIRES IMTConServerAccess::ServersAdd( const UINT64 server_id // ID )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAccess.ServersAdd( ulong server_id // ID )  
---  
Python (Manager API)
MTConServerAccess.ServersAdd( server_id # ID )  
---  
Parameters
server_id
[in] Trade server ID.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.