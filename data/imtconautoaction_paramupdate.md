# ParamUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoAction ](imtconautoaction.md "IMTConAutoAction")/ ParamUpdate | [](imtconautoaction_paramadd.md "ParamAdd") [](imtconautoaction_paramdelete.md "ParamDelete") |
| --- | --- | --- |
| --- | --- |

IMTConAutoAction::ParamUpdate
Change a parameter for an automation task action.
C++
MTAPIRES IMTConAutoAction::ParamUpdate( const UINT pos, // Parameter position const IMTConAutoParam* param // Parameter object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoAction.ParamUpdate( uint pos, // Parameter position CIMTConAutoParam param // Parameter object )  
---  
Python
MTConAutoAction.ParamUpdate( pos, # Parameter position param # Parameter o )  
---  
MTConAutoAction.ParamSet( parameter_list # List of parameters )  
---  
Parameters
pos
[in] The position of the parameter in the list starting at 0.
param
[in] [IMTConAutoParam](imtconautoparam.md "IMTConAutoParam") action parameter.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.