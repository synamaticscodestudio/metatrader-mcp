# GroupDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ GroupDelete | [](imtcongateway_groupshift.md "GroupShift") [](imtcongateway_groupclear.md "GroupClear") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::GroupDelete
Delete [a group](config_group.md "Groups") with a specified index from the list of groups, trade operations of which are processed by the gateway.
C++
MTAPIRES IMTConGateway::GroupDelete( const UINT pos // Position of the group )  
---  
.NET (Gateway/Manager API)
MTRetCOde CIMTConGateway.GroupDelete( uint pos // Position of the group )  
---  
Python (Manager API)
MTConGateway.GroupDelete( pos # Position of the group )  
---  
Parameters
pos
[in] Position of the group in the list, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.