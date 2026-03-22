# BindingsClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAccess ](imtconserveraccess.md "IMTConServerAccess")/ BindingsClear | [](imtconserveraccess_bindingsdelete.md "BindingsDelete") [](imtconserveraccess_bindingstotal.md "BindingsTotal") |
| --- | --- | --- |
| --- | --- |

IMTConServerAccess::BindingsClear
Clear the list of bindings.
C++
MTAPIRES IMTConServerAccess::BindingsClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAccess.BindingsClear()  
---  
Python (Manager API)
MTConServerAccess.BindingsClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method clears the list of server bindings.