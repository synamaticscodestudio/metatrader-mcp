# ServersShift (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAccess ](imtconserveraccess.md "IMTConServerAccess")/ ServersShift | [](imtconserveraccess_serversupdate.md "ServersUpdate") [](imtconserveraccess_serversdelete.md "ServersDelete") |
| --- | --- | --- |
| --- | --- |

IMTConServerAccess::ServersShift
Move a trade server, the connection to which is implemented through this Access Server.
C++
MTAPIRES IMTConServerAccess::ServersShift( const UINT pos, // Position of the trade server const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAccess.ServersShift( uint pos, // Position of the trade server int shift // Shift )  
---  
Python (Manager API)
MTConServerAccess.ServersShift( pos, # Position of the trade server shift # Shift )  
---  
Parameters
pos
[in] Position of the trade server in the list.
shift
[in] Shift from its current position. A negative value means the shift to the top of the list, a positive value - to its end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.