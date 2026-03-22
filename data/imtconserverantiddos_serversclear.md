# ServersClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAntiDDoS ](imtconserverantiddos.md "IMTConServerAntiDDoS")/ ServersClear | [](imtconserverantiddos_serversdelete.md "ServersDelete") [](imtconserverantiddos_serverstotal.md "ServersTotal") |
| --- | --- | --- |
| --- | --- |

IMTConServerAntiDDoS::ServersClear
Clear the list of trade servers, the connection to which is implemented through this Anti DDoS server.
C++
MTAPIRES IMTConServerAntiDDoS::ServersClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAntiDDoS.ServersClear()  
---  
Python (Manager API)
MTConServerAntiDDoS.ServersClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method clears the list of trade servers in the Anti-DDoS server settings.