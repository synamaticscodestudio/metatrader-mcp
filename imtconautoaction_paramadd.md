# ParamAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoAction ](imtconautoaction.md "IMTConAutoAction")/ ParamAdd | [](imtconautoaction_name.md "Name") [](imtconautoaction_paramupdate.md "ParamUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConAutoAction::ParamAdd
Add a parameter for an automation task action.
C++
MTAPIRES IMTConAutoAction::ParamAdd( IMTConAutoParam*  param // Action object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoAction.ParamAdd( CIMTConAutoParam param // Action object )  
---  
Python
MTConAutoAction.ParamAdd( param # Action object )  
---  
Parameters
param
[in] [IMTConAutoParam](imtconautoparam.md "IMTConAutoParam") parameter object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.