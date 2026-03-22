# AdaptersCurrent (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ AdaptersCurrent | [](imtconserver_servicetime.md "ServiceTime") [](imtconserver_adapterstotal.md "AdaptersTotal") |
| --- | --- | --- |
| --- | --- |

IMTConServer::AdaptersCurrent
Get the current network controller.
C++
LPCWSTR IMTConServer::AdaptersCurrent() const  
---  
.NET (Gateway/Manager API)
srting CIMTConServer.AdaptersCurrent()  
---  
Python (Manager API)
MTConServer.AdaptersCurrent  
---  
Return Value
If successful, it returns a pointer to a string with the name of the current network controller. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConServer](imtconserver.md "IMTConServer") object.
To use the string after the object removal (call of the [IMTConServer::Release](imtconserver_release.md "Release") method of this object), a copy of it should be created.
IMTConServer::AdaptersCurrent
Set the current network controller.
C++
MTAPIRES IMTConServer::AdaptersCurrent( LPCWSTR current // The name of the network controller )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServer.AdaptersCurrent( string current // The name of the network controller )  
---  
Python (Manager API)
MTConServer.AdaptersCurrent  
---  
Parameters
current
[in] The name of the network controller.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The length of the controller name is limited to 128 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.