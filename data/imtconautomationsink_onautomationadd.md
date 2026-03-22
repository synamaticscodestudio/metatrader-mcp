# OnAutomationAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutomationSink ](imtconautomationsink.md "IMTConAutomationSink")/ OnAutomationAdd | [](imtconautomationsink.md "IMTConAutomationSink") [](imtconautomationsink_onautomationupdate.md "OnAutomationUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConAutomationSink::OnAutomationAdd
Event hander for the addition of a new automation configuration.
C++
virtual void IMTConAutomationSink::OnAutomationAdd( const IMTConAutomation* config // A pointer to the configuration object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConAutomationSink.OnAutomationAdd( CIMTConAutomation config // Configuration object )  
---  
Parameters
config
[in] A pointer to the object of the added [IMTConAutomation](imtconautomation.md "IMTConAutomation") configuration.
Note
This method is called by the API to notify that a new automation configuration has been added.