# AutomationTrigger (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Automation ](serverapi_config_automation.md "Automations")/ AutomationTrigger | [](imtserverapi_automationget.md "AutomationGet") [](serverapi_vps.md "VPS") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::AutomationTrigger
Send an event to trigger an automation rule with the specified name.
MTAPIRES IMTServerAPI::AutomationTrigger( LPCWSTR name, // Configuration name const IMTUser* user, // User object const IMTAccount* account, // An object of the account trading state const IMTDeal* deal, // Deal object const IMTOrder* order, // Order object const IMTPosition* position // Position object )  
---  
Parameters
name
[in] The name of the automation configuration for which the event is sent. The [IMTConAutomation::Name](imtconautomation_name.md "Name") fields is used for the name.
user
[in] The [IMTUser](imtuser.md "IMTUser") user object. Optional parameter.
account
[in] The [IMTAccount](imtaccount.md "IMTAccount") object of the account trading state. Optional parameter.
deal
[in] The [IMTDeal](imtdeal.md "IMTDeal") deal object. Optional parameter.
order
[in] The [IMTOrder](imtorder.md "IMTOrder") order object. Optional parameter.
position
[in] The [IMTPosition](imtposition.md "IMTPosition") position object. Optional parameter.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Use this function to run automation tasks based on your own events. During the function call, a special event is generated for the task specified in the 'name' parameter. The event causes the task to trigger.
When the event is received on the server side, the trigger type set for the automation task is checked. If it is different from [IMTConAutomationTrigger::TRIGGER_EXTERNAL_API](imtconautomation_enum.htm#entriggers), the task will not trigger.
Parameters 'user', 'account', 'deal', 'order' and 'position' should be filled depending on your tasks and on what the event being generated is associated with. If it concerns changes in the user database, pass 'user'; if it implies execution of a deal on the account, pass 'deal', and so on.
Information from these parameters is passed as an execution context for the automation task. You can use it for checks in [additional parameters](https://support.metaquotes.net/en/docs/mt5/platform/administration/automation/automation_condition) and in [macros](https://support.metaquotes.net/en/docs/mt5/platform/administration/automation/automation_macros). For example, login from 'user' can be checked in [IMTConAutoCondition::CONDITION_ACCOUNT_LOGIN](imtconautocondition_enum.htm#enconditions), and ticket from 'deal' can be used in [IMTConAutoCondition::CONDITION_DEAL_TICKET](imtconautocondition_enum.htm#enconditions).