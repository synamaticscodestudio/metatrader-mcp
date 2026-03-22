# ValueBool (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoParam ](imtconautoparam.md "IMTConAutoParam")/ ValueBool | [](imtconautoparam_valueleverage.md "ValueLeverage") [](imtconautoparam_valuetime.md "ValueTime") |
| --- | --- | --- |
| --- | --- |

IMTConAutoParam::ValueBool
Get a parameter value of bool type.
C++
bool IMTConAutoParam::ValueBool() const  
---  
.NET (Gateway/Manager API)
bool CIMTConAutoParam.ValueBool()  
---  
Python
MTConAutoParam.ValueBool  
---  
Return Value
True or false.
IMTConAutoParam::ValueBool
Set a parameter value of bool type.
C++
MTAPIRES IMTConAutoParam::ValueBool( const bool value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoParam.ValueBool( bool value // Value )  
---  
Python
MTConAutoParam.ValueBool  
---  
Parameters
value
[in] True or false.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.