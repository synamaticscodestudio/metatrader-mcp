# AutomationSubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Automation ](imtadminapi_config_automation.md "Automations")/ AutomationSubscribe | [](imtadminapi_automationparamcreate.md "AutomationParamCreate") [](imtadminapi_automationunsubscribe.md "AutomationUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::AutomationSubscribe
Subscribe to events and hooks associated with automation configurations.
C++
MTAPIRES IMTAdminAPI::AutomationSubscribe( IMTConAutomationSink* sink // A pointer to the IMTConAutomationSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.AutomationSubscribe( CIMTConAutomationSink sink // CIMTConAutomationSink object )  
---  
Python
AdminAPI.AutomationSubscribe( sink # IMTConAutomationSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConAutomationSink](imtconautomationsink.md "IMTConAutomationSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. The same [IMTConAutomationSink](imtconautomationsink.md "IMTConAutomationSink") interface cannot subscribe to an event twice. The [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") response code is returned in this case.
The object at which sink points, must remain in the memory (must not be removed) until [IMTAdminAPI::AutomationUnsubscribe](imtadminapi_automationunsubscribe.md "AutomationUnsubscribe") is called or until the plugin is deleted.