# ValueLeverage (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPSCondition ](imtconvpscondition.md "IMTConVPSCondition")/ ValueLeverage | [](imtconvpscondition_valuedatetime.md "ValueDatetime") [](imtconvpscondition_valuebool.md "ValueBool") |
| --- | --- | --- |
| --- | --- |

IMTConVPSCondition::ValueLeverage
Get the value of a condition that expresses the leverage.
C++
INT64 IMTConVPSCondition::ValueLeverage() const  
---  
.NET (Gateway/Manager API)
long CIMTConVPSCondition.ValueLeverage()  
---  
Python
MTConVPSCondition.ValueLeverage  
---  
Return Value
Value of the leverage from 1 to 500.
IMTConVPSCondition::ValueLeverage
Set the value of a condition that expresses the leverage.
C++
MTAPIRES IMTConVPSCondition::ValueLeverage( const INT64 value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPSCondition.ValueLeverage( long value // Value )  
---  
Python
MTConVPSCondition.ValueLeverage  
---  
Parameters
value
[in] Value of the leverage from 1 to 500.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.