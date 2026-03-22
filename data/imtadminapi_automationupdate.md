# AutomationUpdate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Automation ](imtadminapi_config_automation.md "Automations")/ AutomationUpdate | [](imtadminapi_automationunsubscribe.md "AutomationUnsubscribe") [](imtadminapi_automationupdatebatch.md "AutomationUpdateBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::AutomationUpdate
Add or update an automation configuration.
C++
MTAPIRES IMTAdminAPI::AutomationUpdate( IMTConAutomation* config // Automation configuration object )  
---  
.NET
MTRetCode CIMTAdminAPI.AutomationUpdate( CIMTConAutomation config // Automation configuration object )  
---  
Python
AdminAPI.AutomationUpdate( config # Automation configuration object )  
---  
Parameters
config
[in] The [IMTConAutomation](imtconautomation.md "IMTConAutomation") automaton configuration object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The record existence is checked during the method call. If the record already exists, it is updated. Otherwise a new record is added. The key field for comparison is the configuration name [IMTConAutomation::Name()](imtconautomation_name.md "Name"). When you try to add a completely identical record, no changes are made, and therefore the [IMTConAutomationSink::OnAutomationUpdate](imtconautomationsink_onautomationupdate.md "OnAutomationUpdate") notification method is not called.
A configuration can only be added or updated from the applications running on the main server. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned.
Before adding a record, its correctness is checked. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.