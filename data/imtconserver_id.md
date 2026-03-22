# Id (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ Id | [](imtconserver_addressipv6next.md "AddressIPv6Next") [](imtconserver_password.md "Password") |
| --- | --- | --- |
| --- | --- |

IMTConServer::Id
Get the ID of the server.
C++
UINT64 IMTConServer::Id() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConServer.Id()  
---  
Python (Manager API)
MTConServer.Id  
---  
Return Value
Server ID.
IMTConServer::Id
Set the ID of the server.
C++
MTAPIRES IMTConServer::Id( UINT64 id // Server ID )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServer.Id( ulong id // Server ID )  
---  
Python (Manager API)
MTConServer.Id  
---  
Parameters
id
[in] Server ID.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.