# BindingsNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAccess ](imtconserveraccess.md "IMTConServerAccess")/ BindingsNext | [](imtconserveraccess_bindingstotal.md "BindingsTotal") [](imtconserveraccess_serversadd.md "ServersAdd") |
| --- | --- | --- |
| --- | --- |

IMTConServerAccess::BindingsNext
Gets a binding by the index.
C++
LPCWSTR IMTConServerAccess::BindingsNext( const UINT pos // Position of the binding ) const  
---  
.NET (Gateway/Manager API)
string CIMTConServerAccess.BindingsNext( uint pos // Position of the binding )  
---  
Python (Manager API)
MTConServerAccess.BindingsNext( pos # Position of the binding )  
---  
Parameters
pos
[in] Position of the binding in the list, starting with 0.
Return Value
If successful, it returns a pointer to a string with the address. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConServerAccess](imtconserveraccess.md "IMTConServerAccess") object.
To use the string after the object removal (call of the [IMTConServerAccess::Release](imtconserveraccess_release.md "Release") method of this object), a copy of it should be created.
The method is obsolete. Use [IMTConServer::BindingsNext](imtconserver_bindingsnext.md "BindingsNext") instead.