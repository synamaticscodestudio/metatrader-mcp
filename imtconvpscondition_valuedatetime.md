# ValueDatetime (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPSCondition ](imtconvpscondition.md "IMTConVPSCondition")/ ValueDatetime | [](imtconvpscondition_valuemoney.md "ValueMoney") [](imtconvpscondition_valueleverage.md "ValueLeverage") |
| --- | --- | --- |
| --- | --- |

IMTConVPSCondition::ValueDatetime
Get a condition value expressing date and time.
C++
INT64 IMTConVPSCondition::ValueDatetime() const  
---  
.NET (Gateway/Manager API)
long CIMTConVPSCondition.ValueDatetime()  
---  
Python
MTConVPSCondition.ValueDatetime  
---  
Return Value
Date and time in seconds that have elapsed since 01.01.1970.
IMTConVPSCondition::ValueDatetime
Set a condition value that expresses date and time.
C++
MTAPIRES IMTConVPSCondition::ValueDatetime( const INT64 value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPSCondition.ValueDatetime( long value // Value )  
---  
Python
MTConVPSCondition.ValueDatetime  
---  
Parameters
value
[in] Date and time in seconds that have elapsed since 01.01.1970.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.