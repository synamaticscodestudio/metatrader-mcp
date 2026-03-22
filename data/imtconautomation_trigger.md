# Trigger (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutomation ](imtconautomation.md "IMTConAutomation")/ Trigger | [](imtconautomation_name.md "Name") [](imtconautomation_flags.md "Flags") |
| --- | --- | --- |
| --- | --- |

IMTConAutomation::Trigger
Get a [trigger](https://support.metaquotes.net/en/docs/mt5/platform/administration/automation/automation_trigger) — an event in the platform, upon occurrence of which the automation task should be executed.
C++
UINT IMTConAutomation::Trigger() const  
---  
.NET (Gateway/Manager API)
EnProviderType CIMTConAutomation.Trigger()  
---  
Python
MTConAutomation.Trigger  
---  
Return Value
Automation task trigger. Passed as a value of the [IMTConAutomation::EnTriggers](imtconautomation_enum.htm#entriggers) enumeration.
IMTConAutomation::Trigger
Set a [trigger](https://support.metaquotes.net/en/docs/mt5/platform/administration/automation/automation_trigger) — an event in the platform, upon occurrence of which the automation task should be executed.
C++
MTAPIRES IMTConAutomation::Trigger( const UINT trigger // Trigger )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutomation.Trigger( EnProviderType trigger // Trigger )  
---  
Python
MTConAutomation.Trigger  
---  
Parameters
trigger
[in] Automation task trigger. Passed as a value of the [IMTConAutomation::EnTriggers](imtconautomation_enum.htm#entriggers) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.