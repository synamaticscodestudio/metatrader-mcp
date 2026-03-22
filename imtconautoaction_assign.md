# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoAction ](imtconautoaction.md "IMTConAutoAction")/ Assign | [](imtconautoaction_release.md "Release") [](imtconautoaction_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConAutoAction::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConAutoAction::Assign( const IMTConAutoAction* action // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoAction.Assign( CIMTConAutoAction action // Source object )  
---  
Parameters
action
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.