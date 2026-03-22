# BindingsUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAccess ](imtconserveraccess.md "IMTConServerAccess")/ BindingsUpdate | [](imtconserveraccess_bindingsadd.md "BindingsAdd") [](imtconserveraccess_bindingsshift.md "BindingsShift") |
| --- | --- | --- |
| --- | --- |

IMTConServerAccess::BindingsUpdate
Update the binding at the specified position in the list.
C++
MTAPIRES IMTConServerAccess::BindingsUpdate( const UINT pos, // Position of the binding LPCWSTR address // Binding address and port )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAccess.BindingsUpdate( uint pos, // Position of the binding string address // Binding address and port )  
---  
Python (Manager API)
MTConServerAccess.BindingsUpdate( pos, # Position of the binding address # Binding address and port )  
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
The method is obsolete. Use [IMTConServer::BindingsUpdate](imtconserver_bindingsupdate.md "BindingsUpdate") instead.