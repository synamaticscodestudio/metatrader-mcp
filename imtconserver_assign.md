# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ Assign | [](imtconserver_release.md "Release") [](imtconserver_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConServer::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConServer::Assign( const IMTConServer* param // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServer.Assign( CIMTConServer param // Source object )  
---  
Parameters
param
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.