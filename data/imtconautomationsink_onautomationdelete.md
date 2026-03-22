# OnAutomationDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutomationSink ](imtconautomationsink.md "IMTConAutomationSink")/ OnAutomationDelete | [](imtconautomationsink_onautomationupdate.md "OnAutomationUpdate") [](imtconautomationsink_onautomationsync.md "OnAutomationSync") |
| --- | --- | --- |
| --- | --- |

IMTConAutomationSink:OnAutomationDelete
Event hander for the deletion of an automation configuration.
C++
virtual void IMTConAutomationSink::OnAutomationDelete( const IMTConAutomation* config // A pointer to the configuration object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConAutomationSink.OnAutomationDelete( CIMTConAutomation config // Configuration object )  
---  
Parameters
config
A pointer to the deleted [IMTConAutomation](imtconautomation.md "IMTConAutomation") configuration object.
Note
This method is called by the API to notify that an automation configuration has been deleted.