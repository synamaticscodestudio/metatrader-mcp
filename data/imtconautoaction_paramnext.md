# ParamNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoAction ](imtconautoaction.md "IMTConAutoAction")/ ParamNext | [](imtconautoaction_paramtotal.md "ParamTotal") [](imtconautoparam.md "IMTConAutoParam") |
| --- | --- | --- |
| --- | --- |

IMTConAutoAction::ParamNext
Get the action parameter by index.
C++
MTAPIRES IMTConAutoAction::ParamNext( const UINT pos, // Parameter position IMTConAutoParam* param // Parameter object ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoAction.ParamNext( uint pos, // Parameter position CIMTConAutoParam param // Parameter object )  
---  
Python
MTConAutoAction.ParamNext( pos # Parameter position )  
---  
MTConAutoAction.ParamGet()  
---  
Parameters
pos
[in] The position of the parameter in the list starting at 0.
param
[out] [IMTConAutoParam](imtconautoparam.md "IMTConAutoParam") parameter object. The 'param' object must be previously created using the [IMTServerAPI::AutomationParamCreate](imtserverapi_automationparamcreate.md "AutomationParamCreate") or [IMTAdminAPI::AutomationParamCreate](imtadminapi_automationparamcreate.md "AutomationParamCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.