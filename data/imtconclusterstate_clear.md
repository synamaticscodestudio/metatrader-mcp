# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConClusterState ](imtconclusterstate.md "IMTConClusterState")/ Clear | [](imtconclusterstate_assign.md "Assign") [](imtconclusterstate_id.md "Id") |
| --- | --- | --- |
| --- | --- |

IMTConClusterState::Clear
Clear an object.
C++
MTAPIRES IMTConClusterState::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode IMTConClusterState.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
This method clears all fields ​​and removes nested objects.