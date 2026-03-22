# ValueLeverage (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoParam ](imtconautoparam.md "IMTConAutoParam")/ ValueLeverage | [](imtconautoparam_valuedatetime.md "ValueDatetime") [](imtconautoparam_valuebool.md "ValueBool") |
| --- | --- | --- |
| --- | --- |

IMTConAutoParam::ValueLeverage
Get the value of the parameter that expresses the leverage.
C++
INT64 IMTConAutoParam::ValueLeverage() const  
---  
.NET (Gateway/Manager API)
long CIMTConAutoParam.ValueLeverage()  
---  
Python
MTConAutoParam.ValueLeverage  
---  
Return Value
Value of the leverage from 1 to 500.
IMTConAutoParam::ValueLeverage
Set the value of the parameter that expresses the leverage.
C++
MTAPIRES IMTConAutoParam::ValueLeverage( const INT64 value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoParam.ValueLeverage( long value // Value )  
---  
Python
MTConAutoParam.ValueLeverage  
---  
Parameters
value
[in] Value of the leverage from 1 to 500.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.