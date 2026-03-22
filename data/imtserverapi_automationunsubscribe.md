# AutomationUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Automation ](serverapi_config_automation.md "Automations")/ AutomationUnsubscribe | [](imtserverapi_automationsubscribe.md "AutomationSubscribe") [](imtserverapi_automationadd.md "AutomationAdd") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::AutomationUnsubscribe
Unsubscribe from events and hooks associated with the automation configuration.
MTAPIRES IMTServerAPI::AutomationUnsubscribe( IMTConAutomationSink* sink // A pointer to the IMTConAutomationSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConAutomationSink](imtconautomationsink.md "IMTConAutomationSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method is paired with [IMTServerAPI::AutomationSubscribe](imtserverapi_automationsubscribe.md "AutomationSubscribe"). If an attempt is made to unsubscribe from the interface which has not been previously subscribed to, the [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.