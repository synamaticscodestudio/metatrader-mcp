# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConCondition ](imtconcondition.md "IMTConCondition")/ Assign | [](imtconcondition_release.md "Release") [](imtconcondition_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConCondition::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConCondition::Assign( const IMTConCondition* config // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCondition.Assign( CIMTConCondition config // Source object )  
---  
Parameters
config
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.