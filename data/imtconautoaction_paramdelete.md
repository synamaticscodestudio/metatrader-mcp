# ParamDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoAction ](imtconautoaction.md "IMTConAutoAction")/ ParamDelete | [](imtconautoaction_paramupdate.md "ParamUpdate") [](imtconautoaction_paramclear.md "ParamClear") |
| --- | --- | --- |
| --- | --- |

IMTConAutoAction::ParamDelete
Delete a parameter from an automation task action.
C++
MTAPIRES IMTConAutoAction::ParamDelete( const UINT pos // Parameter position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoAction.ParamDelete( uint pos // Parameter position )  
---  
Python
MTConAutoAction.ParamDelete( pos # Parameter position )  
---  
Parameters
pos
[in] The position of the parameter in the list starting at 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.