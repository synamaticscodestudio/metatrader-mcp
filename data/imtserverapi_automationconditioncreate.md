# AutomationConditionCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Automation ](serverapi_config_automation.md "Automations")/ AutomationConditionCreate | [](imtserverapi_automationcreate.md "AutomationCreate") [](imtserverapi_automationactioncreate.md "AutomationActionCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::AutomationConditionCreate
Create an automation task condition object.
IMTConAutoCondition* IMTServerAPI::AutomationConditionCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConAutoCondition](imtconautocondition.md "IMTConAutoCondition") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConAutoCondition::Release](imtconautocondition_release.md "Release") method of this object.