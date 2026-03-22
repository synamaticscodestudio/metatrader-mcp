# AutomationActionCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Automation ](serverapi_config_automation.md "Automations")/ AutomationActionCreate | [](imtserverapi_automationconditioncreate.md "AutomationConditionCreate") [](imtserverapi_automationparamcreate.md "AutomationParamCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::AutomationActionCreate
Create an automation task action object.
IMTConAutoAction* IMTServerAPI::AutomationActionCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConAutoAction](imtconautoaction.md "IMTConAutoAction") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConAutoAction::Release](imtconautoaction_release.md "Release") method of this object.