# Type (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ Type | [](imtconserver_clear.md "Clear") [](imtconserver_name.md "Name") |
| --- | --- | --- |
| --- | --- |

IMTConServer::Type
Get the address of the server.
C++
UINT IMTConServer::Type() const  
---  
.NET (Gateway/Manager API)
uint CIMTConServer.Type()  
---  
Python (Manager API)
MTConServer.Type  
---  
Return Value
One of the values of the [IMTConServer::EnServerTypes](imtconserver_enum.htm#enservertypes) enumeration.
IMTConServer::Type
Set the server type.
C++
MTAPIRES IMTConServer::Type( const UINT type // Server type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServer.Type( uint type // Server type )  
---  
Python (Manager API)
MTConServer.Type  
---  
Parameters
type
[in] The server type is passed using the [IMTConServer::EnServerTypes](imtconserver_enum.htm#enservertypes) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.