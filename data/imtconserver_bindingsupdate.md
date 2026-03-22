# BindingsUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ BindingsUpdate | [](imtconserver_bindingsadd.md "BindingsAdd") [](imtconserver_bindingsshift.md "BindingsShift") |
| --- | --- | --- |
| --- | --- |

IMTConServer::BindingsUpdate
Update the binding at the specified position in the list.
C++
MTAPIRES IMTConServer::BindingsUpdate( const UINT pos, // Position of the binding LPCWSTR address // Binding address and port )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServer.BindingsUpdate( uint pos, // Position of the binding string address // Binding address and port )  
---  
Python (Manager API)
MTConServer.BindingsUpdate( pos, # Position of the binding address # Binding address and port )  
---  
Parameters
pos
[in] Position of the binding in the list, starting with 0.
address
[in] Address and port of the binding, separated by a colon.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The binding is specified in the format address:port.
The length of the address is limited to 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.
Address for listening (binding) is the address and port to be listened to by the access server for the availability of external connections.