# ParamClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoAction ](imtconautoaction.md "IMTConAutoAction")/ ParamClear | [](imtconautoaction_paramdelete.md "ParamDelete") [](imtconautoaction_paramshift.md "ParamShift") |
| --- | --- | --- |
| --- | --- |

IMTConAutoAction::ParamClear
Clear the list of all parameters for an automation task action.
C++
MTAPIRES IMTConAutoAction::ParamClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoAction.ParamClear()  
---  
Python
MTConAutoAction.ParamClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method removes all parameters from the automation task action.