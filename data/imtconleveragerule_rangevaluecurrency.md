# RangeValueCurrency (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverageRule ](imtconleveragerule.md "IMTConLeverageRule")/ RangeValueCurrency | [](imtconleveragerule_rangemode.md "RangeMode") [](imtconleveragerule_tieradd.md "TierAdd") |
| --- | --- | --- |
| --- | --- |

IMTConLeverageRule::RangeValueCurrency
Get the currency to which the notional value of positions in [IMTConLeverageRule::RANGE_VALUE*](imtconleveragerule_enum.htm#enrangemode) modes is converted.
C++
LPCWSTR IMTConLeverageRule::RangeValueCurrency() const  
---  
.NET (Gateway/Manager API)
string CIMTConLeverageRule.RangeValueCurrency()  
---  
Python (Manager API)
MTConLeverageRule.RangeValueCurrency  
---  
Return Value
If successful, it returns a pointer to a string with the configuration name. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid throughout the lifetime of the [IMTConLeverageRule](imtconleveragerule.md "IMTConLeverageRule") object.
To use the string after the object is deleted (by calling the [IMTConLeverageRule::Release](imtconleveragerule_release.md "Release") method of this object), you should create its copy.
If the currency is not specified, conversion is made using the deposit currency of the group for which the margin is calculated.
IMTConLeverageRule::RangeValueCurrency
Set the currency to which the notional value of positions in [IMTConLeverageRule::RANGE_VALUE*](imtconleveragerule_enum.htm#enrangemode) modes is converted.
C++
MTAPIRES IMTConLeverageRule::RangeValueCurrency( LPCWSTR currency // Currency )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConLeverageRule.RangeValueCurrency( srting currency // Currency )  
---  
Python (Manager API)
MTConLeverageRule.RangeValueCurrency  
---  
Parameters
path
[in] Three-character currency name. For example, EUR, USD, JPY, etc.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
If the currency is not specified, conversion is made using the deposit currency of the group for which the margin is calculated.
The maximum path length is 128 characters (including the end-of-string character). If a longer string is assigned, it will be truncated to this length.