# ServersClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAccess ](imtconserveraccess.md "IMTConServerAccess")/ ServersClear | [](imtconserveraccess_serversdelete.md "ServersDelete") [](imtconserveraccess_serverstotal.md "ServersTotal") |
| --- | --- | --- |
| --- | --- |

IMTConServerAccess::ServersClear
Clear the list of trading servers connection to which is implemented through this Access Server.
C++
MTAPIRES IMTConServerAccess::ServersClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAccess.ServersClear()  
---  
Python (Manager API)
MTConServerAccess.ServersClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method clears the list of trading servers.