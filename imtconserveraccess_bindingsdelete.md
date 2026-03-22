# BindingsDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAccess ](imtconserveraccess.md "IMTConServerAccess")/ BindingsDelete | [](imtconserveraccess_bindingsshift.md "BindingsShift") [](imtconserveraccess_bindingsclear.md "BindingsClear") |
| --- | --- | --- |
| --- | --- |

IMTConServerAccess::BindingsDelete
Delete a binding by the index.
C++
MTAPIRES IMTConServerAccess::BindingsDelete( const UINT pos // Position of the binding )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAccess.BindingsDelete( uint  pos // Position of the binding )  
---  
Python (Manager API)
MTConServerAccess.BindingsDelete( pos # Position of the binding )  
---  
Parameters
pos
[in] Position of the binding in the list, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method is obsolete. Use [IMTConServer::BindingsDelete](imtconserver_bindingsdelete.md "BindingsDelete") instead.