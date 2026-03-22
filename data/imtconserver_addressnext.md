# AddressNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ AddressNext | [](imtconserver_addresstotal.md "AddressTotal") [](imtconserver_addressipv6.md "AddressIPv6") |
| --- | --- | --- |
| --- | --- |

IMTConServer::AddressNext
Get an available IPv4 address by the index.
C++
UINT IMTConServer::AddressNext( const UINT pos // Position of the IP address ) const  
---  
.NET (Gateway/Manager API)
uint CIMTConServer.AddressNext( uint pos // Position of the IP address )  
---  
Python (Manager API)
MTConServer.AddressNext( pos # Position of the IP address )  
---  
Parameters
pos
[in] Position of the address in the list of available IPv4 addresses.
Return Value
IP address at the specified position.
Note
The address is specified in the format address:port.