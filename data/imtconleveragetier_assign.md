# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverageTier ](imtconleveragetier.md "IMTConLeverageTier")/ Assign | [](imtconleveragetier_release.md "Release") [](imtconleveragetier_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConLeverageTier::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConLeverageTier::Assign( const IMTConLeverageTier* cfg // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConLeverageTier.Assign( CIMTConLeverageTier cfg // Source object )  
---  
Parameters
cfg
[in] Source object.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.