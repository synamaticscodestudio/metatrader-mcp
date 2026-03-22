# ValueBool (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPSCondition ](imtconvpscondition.md "IMTConVPSCondition")/ ValueBool | [](imtconvpscondition_valueleverage.md "ValueLeverage") [](imtconvpscondition_valuetime.md "ValueTime") |
| --- | --- | --- |
| --- | --- |

IMTConVPSCondition::ValueBool
Get the condition value of the bool type.
C++
bool IMTConVPSCondition::ValueBool() const  
---  
.NET (Gateway/Manager API)
bool CIMTConVPSCondition.ValueBool()  
---  
Python
MTConVPSCondition.ValueBool  
---  
Return Value
True or false.
IMTConVPSCondition::ValueBool
Set the condition value of the bool type.
C++
MTAPIRES IMTConVPSCondition::ValueBool( const bool value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPSCondition.ValueBool( bool value // Value )  
---  
Python
MTConVPSCondition.ValueBool  
---  
Parameters
value
[in] True or false.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.