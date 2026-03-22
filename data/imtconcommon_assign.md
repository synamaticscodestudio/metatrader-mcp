# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConCommon ](imtconcommon.md "IMTConCommon")/ Assign | [](imtconcommon_release.md "Release") [](imtconcommon_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConCommon::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConCommon::Assign( const IMTConCommon* param // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCommon.Assign( CIMTConCommon obj // Source object )  
---  
Parameters
param
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.