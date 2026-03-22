# Flags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutomation ](imtconautomation.md "IMTConAutomation")/ Flags | [](imtconautomation_trigger.md "Trigger") [](imtconautomation_timestart.md "TimeStart") |
| --- | --- | --- |
| --- | --- |

IMTConAutomation::Flags
Get additional automation task settings.
C++
UINT64 IMTConAutomation::Flags() const  
---  
.NET (Gateway/Manager API)
EnFlags CIMTConAutomation.Flags()  
---  
Python
MTConAutomation.Flags  
---  
Return Value
Additional settings as the values of the [IMTConAutomation::EnFlags](imtconautomation_enum.htm#enflags) enumeration.
IMTConAutomation::Flags
Set additional automation task settings.
C++
MTAPIRES IMTConAutomation::Flags( const UINT64 flags // Automation task settings )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutomation.Flags( EnFlags flags // Automation task settings )  
---  
Python
MTConAutomation.Flags  
---  
Parameters
flags
[in] Additional settings as the values of the [IMTConAutomation::EnFlags](imtconautomation_enum.htm#enflags) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.