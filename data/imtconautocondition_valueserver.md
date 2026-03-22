# ValueServer (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoCondition ](imtconautocondition.md "IMTConAutoCondition")/ ValueServer | [](imtconautocondition_valuelanguage.md "ValueLanguage") [](imtconautocondition_valuepositiontype.md "ValuePositionType") |
| --- | --- | --- |
| --- | --- |

IMTConAutoCondition::ValueServer
Get the value of a condition expressing [server identifier](imtconserver_id.md "Id").
C++
UINT64 IMTConAutoCondition::ValueServer() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConAutoCondition.ValueServer()  
---  
Python
MTConAutoCondition.ValueServer  
---  
Return Value
The condition value of the UINT type.
IMTConAutoCondition::ValueServer
Set the value of a condition expressing [server identifier](imtconserver_id.md "Id").
C++
MTAPIRES IMTConAutoCondition::ValueServer( const UINT64 value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoCondition.ValueServer( ulong value // Value )  
---  
Python
MTConAutoCondition.ValueServer  
---  
Parameters
value
[in] A value of the UINT type.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.