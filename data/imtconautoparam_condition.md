# Condition (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoParam ](imtconautoparam.md "IMTConAutoParam")/ Param | [](imtconautoparam_clear.md "Clear") [](imtconautoparam_valuetype.md "ValueType") |
| --- | --- | --- |
| --- | --- |

IMTConAutoParam::Param
Get the automation action parameter type.
C++
UINT IMTConAutoParam::Param() const  
---  
.NET (Gateway/Manager API)
EnConditions CIMTConAutoParam.Param()  
---  
Python
MTConAutoParam.Param  
---  
Return Value
A value of the [IMTConAutoParam::EnParams](imtconautoparam_enum.htm#enparams) enumeration.
IMTConAutoParam::Param
Set the automation action parameter type.
C++
MTAPIRES IMTConAutoParam::Param( const UINT param // Parameter type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoParam.Param( EnConditions  param // Parameter )  
---  
Python
MTConAutoParam.Param  
---  
Parameters
param
[in] The automation action parameter type. The parameter type is passed using the [IMTConAutoParam::EnParams](imtconautoparam_enum.htm#enparams) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.