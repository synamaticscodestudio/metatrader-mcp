# ServersDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAccess ](imtconserveraccess.md "IMTConServerAccess")/ ServersDelete | [](imtconserveraccess_serversshift.md "ServersShift") [](imtconserveraccess_serversclear.md "ServersClear") |
| --- | --- | --- |
| --- | --- |

IMTConServerAccess::ServersDelete
Delete a trade server, the connection to which is implemented through this Access Server, from the list.
C++
MTAPIRES IMTConServerAccess::ServersDelete( const UINT pos // Position of the trade server )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAccess.ServersDelete( uint pos // Position of the trade server )  
---  
Python (Manager API)
MTConServerAccess.ServersDelete( pos # Position of the trade server )  
---  
Parameters
pos
[in] Position of the trade server in the list, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.