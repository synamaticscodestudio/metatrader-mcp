# GroupShift (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ GroupShift | [](imtcongateway_groupupdate.md "GroupUpdate") [](imtcongateway_groupdelete.md "GroupDelete") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::GroupShift
Change the position of [a group](config_group.md "Groups") in the list of groups processed by the gateway.
C++
MTAPIRES IMTConGateway::GroupShift( const UINT pos, // Position of the group const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGateway.GroupShift( uint pos, // Position of the group int shift // Shift )  
---  
Python (Manager API)
MTConGateway.GroupShift( pos, # Position of the group shift # Shift )  
---  
Parameters
pos
[in] Position of the group in the list, starting with 0.
shift
[in] Shift from its current position. A negative value means the shift to the top of the list, a positive value - to its end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.