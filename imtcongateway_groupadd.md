# GroupAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ GroupAdd | [](imtcongateway_symbolnext.md "SymbolNext") [](imtcongateway_groupupdate.md "GroupUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::GroupAdd
Add [a group](config_group.md "Groups"), trade operations from which will be processed by the gateway.
C++
MTAPIRES IMTConGateway::GroupAdd( LPCWSTR path // Path to the group )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGateway.GroupAdd( string path // Path to the group )  
---  
Python (Manager API)
MTConGateway.GroupAdd( path # Path to the group )  
---  
Parameters
path
[in] Path to a group in accordance with the hierarchy of groups in the trading platform.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConGroup::Group](imtcongroup_group.md "Group") value is used as the path to the group.