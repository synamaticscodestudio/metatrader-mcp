# ValueTime (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPSCondition ](imtconvpscondition.md "IMTConVPSCondition")/ ValueTime | [](imtconvpscondition_valuebool.md "ValueBool") [](imtconvpscondition_valuedate.md "ValueDate") |
| --- | --- | --- |
| --- | --- |

IMTConVPSCondition::ValueTime
Get the value of a condition that expresses the time.
C++
UINT IMTConVPSCondition::ValueTime() const  
---  
.NET (Gateway/Manager API)
uint CIMTConVPSCondition.ValueTime()  
---  
Python
MTConVPSCondition.ValueTime  
---  
Return Value
Time in minutes since 00:00.
IMTConVPSCondition::ValueTime
Set the value of a condition that expresses the time.
C++
MTAPIRES IMTConVPSCondition::ValueTime( const UINT value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPSCondition.ValueTime( uint value // Value )  
---  
Python
MTConVPSCondition.ValueTime  
---  
Parameters
value
[in] A value in minutes since 00:00.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.