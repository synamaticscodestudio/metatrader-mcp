# Action (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoAction ](imtconautoaction.md "IMTConAutoAction")/ Action | [](imtconautoaction_clear.md "Clear") [](imtconautoaction_name.md "Name") |
| --- | --- | --- |
| --- | --- |

IMTConAutoAction::Action
Get the [action](https://support.metaquotes.net/en/docs/mt5/platform/administration/automation/automation_action) performed upon the triggering of an automation task.
C++
UINT IMTConAutoAction::Action() const  
---  
.NET (Gateway/Manager API)
EnActions CIMTConAutoAction.Action()  
---  
Python
MTConAutoAction.Action  
---  
Return Value
[IMTConAutoAction::EnActions](imtconautoaction_enum.htm#enactions) enumeration value.
IMTConAutoAction::Action
Set the [action](https://support.metaquotes.net/en/docs/mt5/platform/administration/automation/automation_action) performed upon the triggering of an automation task.
C++
MTAPIRES IMTConAutoAction::Action( const UINT action // Action type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoAction.Action( EnActions action // Action type )  
---  
Python
MTConAutoAction.Action  
---  
Parameters
action
[in] The action performed upon the triggering of an automation task. The value is passed using the [IMTConAutoAction::EnActions](imtconautoaction_enum.htm#enactions) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.