# GroupUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ GroupUpdate | [](imtcongateway_groupadd.md "GroupAdd") [](imtcongateway_groupshift.md "GroupShift") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::GroupUpdate
Change [the group](config_group.md "Groups") with a specified index, trade operations of which are processed by the gateway.
C++
MTAPIRES IMTConGateway::GroupUpdate( const UINT pos, // Position of the group LPCWSTR path // Path to the group )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGateway.GroupUpdate( uint pos, // Position of the group string path // Path to the group )  
---  
Python (Manager API)
MTConGateway.GroupUpdate( pos, # Position of the group path # Path to the group )  
---  
Parameters
pos
[in] Position of the group in the list, starting with 0.
path
[in] Path to a group in accordance with the hierarchy of groups in the trading platform.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConGroup::Group](imtcongroup_group.md "Group") value is used as the path to the group.