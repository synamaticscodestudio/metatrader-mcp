# ValueDate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoParam ](imtconautoparam.md "IMTConAutoParam")/ ValueDate | [](imtconautoparam_valuetime.md "ValueTime") [](imtconautoparam_valuepercent.md "ValuePercent") |
| --- | --- | --- |
| --- | --- |

IMTConAutoParam::ValueDate
Get the value of the parameter that expresses the date.
C++
INT64 IMTConAutoParam::ValueDate() const  
---  
.NET (Gateway/Manager API)
long CIMTConAutoParam.ValueDate()  
---  
Python
MTConAutoParam.ValueDate  
---  
Return Value
Date in seconds since 01.01.1970 (00:00 of the specified day).
IMTConAutoParam::ValueDate
Set the value of the parameter that expresses date and time.
C++
MTAPIRES IMTConAutoParam::ValueDate( const INT64 value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoParam.ValueDate( long value // Value )  
---  
Python
MTConAutoParam.ValueDate  
---  
Parameters
value
[in] Date in seconds since 01.01.1970 (00:00 of the specified day).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.