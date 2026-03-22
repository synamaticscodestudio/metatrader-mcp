# ValueDate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoCondition ](imtconautocondition.md "IMTConAutoCondition")/ ValueDate | [](imtconautocondition_valuetime.md "ValueTime") [](imtconautocondition_valuepercent.md "ValuePercent") |
| --- | --- | --- |
| --- | --- |

IMTConAutoCondition::ValueDate
Get a condition value expressing a date.
C++
INT64 IMTConAutoCondition::ValueDate() const  
---  
.NET (Gateway/Manager API)
long CIMTConAutoCondition.ValueDate()  
---  
Python
MTConAutoCondition.ValueDate  
---  
Return Value
Date in seconds since 01.01.1970 (00:00 of the specified day).
IMTConAutoCondition::ValueDate
Set a condition value that expresses date and time.
C++
MTAPIRES IMTConAutoCondition::ValueDate( const INT64 value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoCondition.ValueDate( long value // Value )  
---  
Python
MTConAutoCondition.ValueDate  
---  
Parameters
value
[in] Date in seconds since 01.01.1970 (00:00 of the specified day).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.