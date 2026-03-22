# Automations (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases")/ Automation | [](imtserverapi_messengersend.md "MessengerSend") [](imtserverapi_automationcreate.md "AutomationCreate") |
| --- | --- | --- |
| --- | --- |

Automations
The Automations service enables the execution of various actions in the platform based on predefined scenarios. To automate routine operations, select conditions and appropriate actions that should trigger under these conditions. Automations allow companies to streamline numerous day-to-day operations and eventually reduce manual work. For more details, please read the [MetaTrader 5 Administrator Help](https://support.metaquotes.net/en/docs/mt5/platform/administration/automation).
The functions described in this section enable users to manage automation configurations, as well as to subscribe and to unsubscribe from events related to configuration changes.
| Function | Purpose |
| --- | --- |
| --- | --- |
| [AutomationCreate](imtserverapi_automationcreate.md "AutomationCreate") | Create an automation configuration object. |
| [AutomationConditionCreate](imtserverapi_automationconditioncreate.md "AutomationConditionCreate") | Create an automation task condition object. |
| [AutomationActionCreate](imtserverapi_automationactioncreate.md "AutomationActionCreate") | Create an automation task action object. |
| [AutomationParamCreate](imtserverapi_automationparamcreate.md "AutomationParamCreate") | Create an automation condition parameter object. |
| [AutomationSubscribe](imtserverapi_automationsubscribe.md "AutomationSubscribe") | Subscribe to events and hooks associated with automation configurations. |
| [AutomationUnsubscribe](imtserverapi_automationunsubscribe.md "AutomationUnsubscribe") | Unsubscribe from events and hooks associated with the automation configuration. |
| [AutomationAdd](imtserverapi_automationadd.md "AutomationAdd") | Add or update an automation configuration. |
| [AutomationDelete](imtserverapi_automationdelete.md "AutomationDelete") | Delete an automation configuration by the name or index |
| [AutomationShift](imtserverapi_automationshift.md "AutomationShift") | Change the position of an automation configuration in the list. |
| [AutomationTotal](imtserverapi_automationtotal.md "AutomationTotal") | Get the total number of automation configurations available in the platform. |
| [AutomationNext](imtserverapi_automationnext.md "AutomationNext") | Get an automation configuration by index. |
| [AutomationGet](imtserverapi_automationget.md "AutomationGet") | Get an automation configuration by name. |
| [AutomationTrigger](imtserverapi_automationtrigger.md "AutomationTrigger") | Send an event to trigger an automation rule with the specified name. |