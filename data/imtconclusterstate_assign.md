# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConClusterState ](imtconclusterstate.md "IMTConClusterState")/ Assign | [](imtconclusterstate_release.md "Release") [](imtconclusterstate_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConClusterState::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConClusterState::Assign( const IMTConClusterState* param // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode IMTConClusterState.Assign( CIMTConClusterState  param // Source object )  
---  
Parameters
param
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.