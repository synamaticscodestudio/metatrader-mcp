# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerRange ](imtconserverrange.md "IMTConServerRange")/ Assign | [](imtconserverrange_release.md "Release") [](imtconserverrange_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConServerRange::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConServerRange::Assign( const IMTConServerRange* param // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerRange.Assign( CIMTConServerRange param // Source object )  
---  
Parameters
param
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.