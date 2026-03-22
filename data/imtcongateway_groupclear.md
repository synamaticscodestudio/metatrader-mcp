# GroupClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ GroupClear | [](imtcongateway_groupdelete.md "GroupDelete") [](imtcongateway_grouptotal.md "GroupTotal") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::GroupClear
Clear the list of [groups](config_group.md "Groups"), trade operations from which are processed by the gateway.
C++
MTAPIRES IMTConGateway::GroupClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGateway.GroupClear()  
---  
Python (Manager API)
MTConGateway.GroupClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method clears the entire list of groups of a gateway.