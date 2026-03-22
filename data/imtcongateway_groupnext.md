# GroupNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ GroupNext | [](imtcongateway_grouptotal.md "GroupTotal") [](imtcongateway_translateadd.md "TranslateAdd") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::GroupNext
Get [a group](config_group.md "Groups") from the list of groups processed by the gateway by the index.
C++
LPCWSTR IMTConGateway::GroupNext( const UINT pos // Position of the group ) const  
---  
.NET (Gateway/Manager API)
string CIMTConGateway.GroupNext( uint pos // Position of the group )  
---  
Python (Manager API)
MTConGateway.GroupNext( pos # Position of the group )  
---  
Parameters
pos
[in] Position of the group in the list, starting with 0.
Return Value
If successful, it returns a pointer to the path to the group at the specified position. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConGateway](imtcongateway.md "IMTConGateway") object.
To use the string after the object removal (call of the [IMTConGateway::Release](imtcongateway_release.md "Release") method of this object), a copy of it should be created.