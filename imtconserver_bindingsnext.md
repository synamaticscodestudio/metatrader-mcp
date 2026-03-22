# BindingsNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ BindingsNext | [](imtconserver_bindingstotal.md "BindingsTotal") [](imtconserver_failovermode.md "FailoverMode") |
| --- | --- | --- |
| --- | --- |

IMTConServer::BindingsNext
Gets a binding by the index.
C++
LPCWSTR IMTConServer::BindingsNext( const UINT pos // Position of the binding ) const  
---  
.NET (Gateway/Manager API)
string CIMTConServer.BindingsNext( uint pos // Position of the binding )  
---  
Python (Manager API)
MTConServer.BindingsNext( pos # Position of the binding )  
---  
Parameters
pos
[in] Position of the binding in the list, starting with 0.
Return Value
If successful, it returns a pointer to a string with the address. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConServer](imtconserver.md "IMTConServer") object.
To use the string after the object removal (call of the [IMTConServer::Release](imtconserver_release.md "Release") method of this object), a copy of it should be created.
Address for listening (binding) is the address and port to be listened to by the access server for the availability of external connections.