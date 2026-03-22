# AutomationUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Automation ](imtadminapi_config_automation.md "Automations")/ AutomationUnsubscribe | [](imtadminapi_automationsubscribe.md "AutomationSubscribe") [](imtadminapi_automationupdate.md "AutomationUpdate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::AutomationUnsubscribe
Unsubscribe from events and hooks associated with the automation configuration.
C++
MTAPIRES IMTAdminAPI::AutomationUnsubscribe( IMTConAutomationSink* sink // A pointer to the IMTConAutomationSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.AutomationUnsubscribe( CIMTConAutomationSink sink // CIMTConAutomationSink object )  
---  
Python
AdminAPI.AutomationUnsubscribe( sink # IMTConAutomationSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConAutomationSink](imtconautomationsink.md "IMTConAutomationSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method is paired with [IMTAdminAPI::AutomationSubscribe](imtadminapi_automationsubscribe.md "AutomationSubscribe"). If an attempt is made to unsubscribe from the interface which has not been previously subscribed to, the [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.