# AutomationConditionCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Automation ](imtadminapi_config_automation.md "Automations")/ AutomationConditionCreate | [](imtadminapi_automationcreate.md "AutomationCreate") [](imtadminapi_automationactioncreate.md "AutomationActionCreate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::AutomationConditionCreate
Create an automation task condition object.
C++
IMTConAutoCondition* IMTAdminAPI::AutomationConditionCreate()  
---  
.NET
CIMTConAutoCondition CIMTAdminAPI.AutomationConditionCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConAutoCondition](imtconautocondition.md "IMTConAutoCondition") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConAutoCondition::Release](imtconautocondition_release.md "Release") method of this object.