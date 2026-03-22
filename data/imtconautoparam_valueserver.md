# ValueServer (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoParam ](imtconautoparam.md "IMTConAutoParam")/ ValueServer | [](imtconautoparam_valuelanguage.md "ValueLanguage") [](imtconautoparam_valuehtml.md "ValueHTML") |
| --- | --- | --- |
| --- | --- |

IMTConAutoParam::ValueServer
Get the value of the parameter that expresses the server ID.
C++
UINT64 IMTConAutoParam::ValueServer() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConAutoParam.ValueServer()  
---  
Python
MTConAutoParam.ValueServer  
---  
Return Value
[Server ID](imtconserver_id.md "Id").
IMTConAutoParam::ValueServer
Set the value of the parameter that expresses the server ID.
C++
MTAPIRES IMTConAutoParam::ValueServer( const UINT64 value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoParam.ValueServer( ulong value // Value )  
---  
Python
MTConAutoParam.ValueServer  
---  
Parameters
value
[in] [Server ID](imtconserver_id.md "Id").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.