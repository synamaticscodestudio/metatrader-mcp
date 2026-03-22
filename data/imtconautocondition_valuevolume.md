# ValueVolume (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoCondition ](imtconautocondition.md "IMTConAutoCondition")/ ValueVolume | [](imtconautocondition_valuemoney.md "ValueMoney") [](imtconautocondition_valuedatetime.md "ValueDatetime") |
| --- | --- | --- |
| --- | --- |

IMTConAutoCondition::ValueVolume
Get a condition value that expresses the volume.
C++
UINT64 IMTConAutoCondition::ValueVolume() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConAutoCondition.ValueVolume()  
---  
Python
MTConAutoCondition.ValueVolume  
---  
Return Value
A value in the UINT64 format (one unit corresponds to 1/100000000 lot, for example, 105000000 means 1.05 lots).
IMTConAutoCondition::ValueVolume
Set a condition value that expresses the volume.
C++
MTAPIRES IMTConAutoCondition::ValueVolume( const UINT64 value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoCondition.ValueVolume( ulong value // Value )  
---  
Python
MTConAutoCondition.ValueVolume  
---  
Parameters
value
[in] A value in the UINT64 format (one unit corresponds to 1/100000000 lot, for example, 105000000 means 1.05 lots).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.