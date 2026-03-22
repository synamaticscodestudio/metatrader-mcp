# OnAutomationUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutomationSink ](imtconautomationsink.md "IMTConAutomationSink")/ OnAutomationUpdate | [](imtconautomationsink_onautomationadd.md "OnAutomationAdd") [](imtconautomationsink_onautomationdelete.md "OnAutomationDelete") |
| --- | --- | --- |
| --- | --- |

IMTConAutomationSink::OnAutomationUpdate
Event hander for the update of an automation configuration.
C++
virtual void IMTConAutomationSink::OnAutomationUpdate( const IMTConAutomation* config // A pointer to the configuration object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConAutomationSink.OnAutomationUpdate( CIMTConAutomation config // Configuration object )  
---  
Parameters
config
[in] A pointer to the updated [IMTConAutomation](imtconautomation.md "IMTConAutomation") configuration object.
Note
This method is called by the API to notify that an automation configuration has been changed.