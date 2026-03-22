# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Additional Parameters ](config_param.md "Additional Parameters") / [ IMTConParam ](imtconparam.md "IMTConParam")/ Assign | [](imtconparam_release.md "Release") [](imtconparam_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConParam::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConParam::Assign( const IMTConParam* param // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConParam.Assign( CIMTConParam  param // Source object )  
---  
Parameters
param
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.