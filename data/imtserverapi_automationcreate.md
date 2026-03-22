# AutomationCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Automation ](serverapi_config_automation.md "Automations")/ AutomationCreate | [](serverapi_config_automation.md "Automations") [](imtserverapi_automationconditioncreate.md "AutomationConditionCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::AutomationCreate
Create an automation configuration object.
IMTConAutomation* IMTServerAPI::AutomationCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConAutomation](imtconautomation.md "IMTConAutomation") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConAutomation::Release](imtconautomation_release.md "Release") method of this object.