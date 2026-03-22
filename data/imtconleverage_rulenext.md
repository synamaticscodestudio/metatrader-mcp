# RuleNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverage ](imtconleverage.md "IMTConLeverage")/ RuleNext | [](imtconleverage_ruletotal.md "RuleTotal") [](imtconleverage_ruleget.md "CountryNext") |
| --- | --- | --- |
| --- | --- |

IMTConLeverage::RuleNext
Get a rule from a floating margin configuration by index.
C++
LPCWSTR IMTConLeverage::RuleNext( const UINT pos // Rule position IMTConLeverageRule* cfg // Rule object ) const  
---  
.NET (Gateway/Manager API)
string CIMTConLeverage.RuleNext( uint pos, // Rule position CIMTConLeverageRule cfg // Rule object )  
---  
Python (Manager API)
MTConLeverage.RuleNext( pos # Rule position )  
---  
Parameters
pos
[in] Position of the rule in the list.
cfg
[out] [IMTConLeverageRule](imtconleveragerule.md "IMTConLeverageRule") rule object. The object must be created in advance using the [IMTServerAPI::LeverageCreate](imtserverapi_leveragecreate.md "LeverageCreate"), [IMTAdminAPI::LeverageCreate](imtadminapi_leveragecreate.md "LeverageCreate"), or [IMTManagerAPI::LeverageCreate](imtmanagerapi_leveragecreate.md "LeverageCreate") method.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.