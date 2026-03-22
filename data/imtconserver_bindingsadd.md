# BindingsAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ BindingsAdd | [](imtconserver_pointsnext.md "PointsNext") [](imtconserver_bindingsupdate.md "BindingsUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConServer::BindingsAdd
Add a binding.
C++
MTAPIRES IMTConServer::BindingsAdd( LPCWSTR path // Binding address and port )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServer.BindingsAdd( string path // Binding address and port )  
---  
Python (Manager API)
MTConServer.BindingsAdd( path # Binding address and port )  
---  
Parameters
path
[in] Address and port of the binding, separated by a colon.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The binding is specified in the format address:port.
The length of the address is limited to 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.
Address for listening (binding) is the address and port to be listened to by the access server for the availability of external connections.