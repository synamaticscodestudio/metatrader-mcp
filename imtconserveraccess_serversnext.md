# ServersNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAccess ](imtconserveraccess.md "IMTConServerAccess")/ ServersNext | [](imtconserveraccess_serverstotal.md "ServersTotal") [](imtconserverantiddos.md "IMTConServerAntiDDoS") |
| --- | --- | --- |
| --- | --- |

IMTConServerAccess::ServersNext
Get a trade server, the connection to which is implemented through this Access Server, by the index.
C++
UINT64 IMTConServerAccess::ServersNext( const UINT pos // Position of the trade server ) const  
---  
.NET (Gateway/Manager API)
ulong CIMTConServerAccess.ServersNext( uint pos // Position of the trade server )  
---  
Python (Manager API)
MTConServerAccess.ServersNext( pos # Position of the trade server )  
---  
Parameters
pos
[in] Position of the trade server in the list, starting with 0.
Return Value
Trade server ID.