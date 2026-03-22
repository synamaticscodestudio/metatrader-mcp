# AddressIPv6Next (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ AddressIPv6Next | [](imtconserver_addressipv6total.md "AddressIPv6Total") [](imtconserver_id.md "Id") |
| --- | --- | --- |
| --- | --- |

IMTConServer::AddressNext
Get an available IPv6 address by the index.
C++
MTAPIRES IMTConServer::AddressNext( const UINT pos, // Position of the IP address MTAPISTR& address // Address ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServer.AddressNext( uint pos, // Position of the IP address out string  address // Address )  
---  
Python (Manager API)
MTConServer.AddressNext( pos, # Position of the IP address address # Address )  
---  
Parameters
pos
[in] Position of the IPv6 address in the list of available addresses.
address
[out] Server address.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The address is specified in the format [address]:port.