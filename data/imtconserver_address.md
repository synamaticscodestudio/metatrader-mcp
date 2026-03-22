# Address (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ Address | [](imtconserver_name.md "Name") [](imtconserver_addresstotal.md "AddressTotal") |
| --- | --- | --- |
| --- | --- |

IMTConServer::Address
Get the IPv4 address of the server.
C++
LPCWSTR IMTConServer::Address() const  
---  
.NET (Gateway/Manager API)
string CIMTConServer.Address()  
---  
Python (Manager API)
MTConServer.Address  
---  
Return Value
If successful, it returns a pointer to the string with the server name. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConServer](imtconserver.md "IMTConServer") object.
To use the string after the object removal (call of the [IMTConServer::Release](imtconserver_release.md "Release") method of this object), a copy of it should be created.
IMTConServer::Address
Set the IPv4 address of the server.
C++
MTAPIRES IMTConServer::Address( LPCWSTR name // Server address )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServer.Address( string name // Server address )  
---  
Python (Manager API)
MTConServer.Address  
---  
Parameters
name
[in] Server address.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The length of the address is limited to 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.