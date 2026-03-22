# ServersShift (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAntiDDoS ](imtconserverantiddos.md "IMTConServerAntiDDoS")/ ServersShift | [](imtconserverantiddos_serversupdate.md "ServersUpdate") [](imtconserverantiddos_serversdelete.md "ServersDelete") |
| --- | --- | --- |
| --- | --- |

IMTConServerAntiDDoS::ServersShift
Move a trade server, the connection to which is implemented through this Anti DDoS server, in the list.
C++
MTAPIRES IMTConServerAntiDDoS::ServersShift( const UINT pos, // The position of the trade server const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAntiDDoS.ServersShift( uint pos, // The position of the trade server int shift // Shift )  
---  
Python (Manager API)
MTConServerAntiDDoS.ServersShift( pos, # The position of the trade server shift # Shift )  
---  
Parameters
pos
[in] Position of the trade server in the list.
shift
[in] Shift from its current position. A negative value means shift towards the top of the list, a positive value shifts towards the end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.