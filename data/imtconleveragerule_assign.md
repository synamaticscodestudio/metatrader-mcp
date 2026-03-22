# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverageRule ](imtconleveragerule.md "IMTConLeverageRule")/ Assign | [](imtconleveragerule_release.md "Release") [](imtconleveragerule_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConLeverageRule::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConLeverageRule::Assign( const IMTConLeverageRule* cfg // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConLeverage.Assign( CIMTConLeverageRule cfg // Source object )  
---  
Parameters
cfg
[in] Source object.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.