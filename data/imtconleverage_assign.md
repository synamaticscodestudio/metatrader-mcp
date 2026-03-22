# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverage ](imtconleverage.md "IMTConLeverage")/ Assign | [](imtconleverage_release.md "Release") [](imtconleverage_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConLeverage::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConLeverage::Assign( const IMTConLeverage* cfg // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConLeverage.Assign( CIMTConLeverage cfg // Source object )  
---  
Parameters
cfg
[in] Source object.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.