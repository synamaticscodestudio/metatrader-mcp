# CountryNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverage ](imtconleverage.md "IMTConLeverage")/ RuleGet | [](imtconleverage_rulenext.md "RuleNext") [](imtconleveragearray.md "IMTConLeverageArray") |
| --- | --- | --- |
| --- | --- |

IMTConLeverage::RuleGet
Get a rule from a floating margin configuration by name.
C++
LPCWSTR IMTConLeverage::RuleGet( LPCWSTR name, // Rule name IMTConLeverageRule* cfg // Rule object ) const  
---  
.NET (Gateway/Manager API)
string CIMTConLeverage.RuleGet( string name, // Rule object CIMTConLeverageRule cfg // Rule object )  
---  
Python (Manager API)
MTConLeverage.RuleGet( name # Rule object )  
---  
Parameters
name
[in] Rule name. Matches the [IMTConLeverage::Name](imtconleverage_name.md "Name") field.
cfg
[out] [IMTConLeverageRule](imtconleveragerule.md "IMTConLeverageRule") rule object. The object must be created in advance using the [IMTServerAPI::LeverageCreate](imtserverapi_leveragecreate.md "LeverageCreate"), [IMTAdminAPI::LeverageCreate](imtadminapi_leveragecreate.md "LeverageCreate"), or [IMTManagerAPI::LeverageCreate](imtmanagerapi_leveragecreate.md "LeverageCreate") method.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.