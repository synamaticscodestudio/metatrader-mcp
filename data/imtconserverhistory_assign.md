# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerHistory ](imtconserverhistory.md "IMTConServerHistory")/ Assign | [](imtconserverhistory_release.md "Release") [](imtconserverhistory_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConServerHistory::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConServerHistory::Assign( const IMTConServerHistory* param // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerHistory.Assign( CIMTConServerHistory param // Source object )  
---  
Parameters
param
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.