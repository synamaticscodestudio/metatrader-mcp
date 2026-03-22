# SourcesNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAntiDDoS ](imtconserverantiddos.md "IMTConServerAntiDDoS")/ SourcesNext | [](imtconserverantiddos_sourcestotal.md "SourcesTotal") [](imtconclusterstate.md "IMTConClusterState") |
| --- | --- | --- |
| --- | --- |

IMTConServerAntiDDoS::SourcesNext
Get the range of IP addresses of Anti DDoS provider's proxy servers at the specified index.
C++
MTAPIRES IMTConServerAntiDDoS::SourcesNext( const UINT pos, // The position of the range IMTConServerAddressRange* range // The object of the range ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAntiDDoS.SourcesNext( uint pos, // The position of the range CIMTConServerAddressRange range // The object of the range )  
---  
Python (Manager API)
MTConServerAntiDDoS.SourcesNext( pos, # The position of the range range # The object of the range )  
---  
Parameters
pos
[in] Position of the range, starting with 0.
range
[out] An object of the range. The 'range' object must first be created using the [IMTAdminAPI::NetServerAddressRangeCreate](imtadminapi_netserveraddressrangecreate.md "NetServerAddressRangeCreate") or [IMTServerAPI::NetServerAddressRangeCreate](imtserverapi_netserveraddressrangecreate.md "NetServerAddressRangeCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the range of IP addresses with a specified index to the 'range' object.
The ranges of IP addresses of proxy servers should be provide by your Anti DDoS protection service provider. The ranges are used as an additional protection measure: connections forwarded by the Anti-DDoS provider will only be accepted from these addresses.