# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoCondition ](imtconautocondition.md "IMTConAutoCondition")/ Assign | [](imtconautocondition_release.md "Release") [](imtconautocondition_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConAutoCondition::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConAutoCondition::Assign( const IMTConAutoCondition* condition // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoCondition.Assign( CIMTConAutoCondition condition // Source object )  
---  
Parameters
condition
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.