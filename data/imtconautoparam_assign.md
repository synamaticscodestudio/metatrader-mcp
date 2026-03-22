# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoParam ](imtconautoparam.md "IMTConAutoParam")/ Assign | [](imtconautoparam_release.md "Release") [](imtconautoparam_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConAutoParam::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConAutoParam::Assign( const IMTConAutoParam* param // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoParam.Assign( CIMTConAutoParam param // Source object )  
---  
Parameters
param
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.