# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutomation ](imtconautomation.md "IMTConAutomation")/ Assign | [](imtconautomation_release.md "Release") [](imtconautomation_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConAutomation::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConAutomation::Assign( const IMTConAutomation* automation // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutomation.Assign( CIMTConAutomation automation // Source object )  
---  
Parameters
automation
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.