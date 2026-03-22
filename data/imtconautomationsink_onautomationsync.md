# OnAutomationSync (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutomationSink ](imtconautomationsink.md "IMTConAutomationSink")/ OnAutomationSync | [](imtconautomationsink_onautomationdelete.md "OnAutomationDelete") [](config_vps.md "VPS") |
| --- | --- | --- |
| --- | --- |

IMTConAutomationSink::OnAutomationSync
Event hander for the synchronization of an automation configuration.
C++
virtual void IMTConAutomationSink::OnAutomationSync()  
---  
.NET (Gateway/Manager API)
virtual void CIMTConAutomationSink.OnAutomationSync()  
---  
Note
This method is called by the API to notify that an automation configuration has been synchronized.
Synchronization of automation configurations is carried out on access and history servers, trade and backup servers when connecting to the main server.