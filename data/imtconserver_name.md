# Name (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ Name | [](imtconserver_type.md "Type") [](imtconserver_address.md "Address") |
| --- | --- | --- |
| --- | --- |

IMTConServer::Name
Get the name of the server.
C++
LPCWSTR IMTConServer::Name() const  
---  
.NET (Gateway/Manager API)
string CIMTConServer.Name()  
---  
Python (Manager API)
MTConServer.Name  
---  
Return Value
If successful, it returns a pointer to the string with the server name. Otherwise, it returns NULL.
Note
The length of the server name is limited to 32 characters.
The pointer to the resulting string is valid for the lifetime of the [IMTConServer](imtconserver.md "IMTConServer") object.
To use the string after the object removal (call of the [IMTConServer::Release](imtconserver_release.md "Release") method of this object), a copy of it should be created.
IMTConServer::Name
Set the name of the server.
C++
MTAPIRES IMTConServer::Name( LPCWSTR name // Server name )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServer.Name( string name // Server name )  
---  
Python (Manager API)
MTConServer.Name  
---  
Parameters
name
[in] Server name.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The length of the server name is limited to 32 characters.