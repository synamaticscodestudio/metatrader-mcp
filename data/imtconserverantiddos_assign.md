# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAntiDDoS ](imtconserverantiddos.md "IMTConServerAntiDDoS")/ Assign | [](imtconserverantiddos_release.md "Release") [](imtconserverantiddos_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConServerAntiDDoS::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConServerAntiDDoS::Assign( const IMTConServerAntiDDoS* param // The source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAccess.Assign( CIMTConServerAntiDDoS param // The source object )  
---  
Parameters
param
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.