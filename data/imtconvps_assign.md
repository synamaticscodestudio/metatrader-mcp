# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPS ](imtconvps.md "IMTConVPS")/ Assign | [](imtconvps_release.md "Release") [](imtconvps_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConVPS::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConVPS::Assign( const IMTConVPS* param // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPS.Assign( CIMTConVPS param // Source object )  
---  
Parameters
param
[in] Source object.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.