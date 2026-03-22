# BindingsClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ BindingsClear | [](imtconserver_bindingsdelete.md "BindingsDelete") [](imtconserver_bindingstotal.md "BindingsTotal") |
| --- | --- | --- |
| --- | --- |

IMTConServer::BindingsClear
Clear the list of bindings.
C++
MTAPIRES IMTConServer::BindingsClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServer.BindingsClear()  
---  
Python (Manager API)
MTConServer.BindingsClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method clears the list of server bindings.