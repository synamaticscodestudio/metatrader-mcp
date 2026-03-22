# AutomationSubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Automation ](serverapi_config_automation.md "Automations")/ AutomationSubscribe | [](imtserverapi_automationparamcreate.md "AutomationParamCreate") [](imtserverapi_automationunsubscribe.md "AutomationUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::AutomationSubscribe
Subscribe to events and hooks associated with automation configurations.
MTAPIRES IMTServerAPI::AutomationSubscribe( IMTConAutomationSink* sink // A pointer to the IMTConAutomationSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConAutomationSink](imtconautomationsink.md "IMTConAutomationSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. The same [IMTConAutomationSink](imtconautomationsink.md "IMTConAutomationSink") interface cannot subscribe to an event twice. The [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") response code is returned in this case.
The object at which sink points, must remain in the memory (must not be removed) until [IMTServerAPI::AutomationUnsubscribe](imtserverapi_automationunsubscribe.md "AutomationUnsubscribe") is called or until the plugin is deleted.