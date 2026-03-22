# AutomationAdd (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Automation ](serverapi_config_automation.md "Automations")/ AutomationAdd | [](imtserverapi_automationunsubscribe.md "AutomationUnsubscribe") [](imtserverapi_automationdelete.md "AutomationDelete") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::AutomationAdd
Add or update an automation configuration.
MTAPIRES IMTServerAPI::AutomationAdd( IMTConMessenger* config // Automaton configuration object )  
---  
Parameters
config
[in] The [IMTConAutomation](imtconautomation.md "IMTConAutomation") automaton configuration object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The record existence is checked during the method call. If the record already exists, it is updated. Otherwise a new record is added. The key field for comparison is the configuration name [IMTConAutomation::Name()](imtconautomation_name.md "Name"). When you try to add a completely identical record, no changes are made, and therefore the [IMTConAutomationSink::OnAutomationUpdate](imtconautomationsink_onautomationupdate.md "OnAutomationUpdate") notification method is not called.
A configuration can be added or updated only from the plugins running on the main server. For all other plugins, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.
Before adding a record, its correctness is checked. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.