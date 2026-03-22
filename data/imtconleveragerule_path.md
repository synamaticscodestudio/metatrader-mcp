# Path (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverageRule ](imtconleveragerule.md "IMTConLeverageRule")/ Path | [](imtconleveragerule_description.md "Description") [](imtconleveragerule_rangemode.md "RangeMode") |
| --- | --- | --- |
| --- | --- |

IMTConLeverageRule::Path
Get the path to a symbol or group of symbols for which the floating margin rule is applied.
C++
LPCWSTR IMTConLeverageRule::Path() const  
---  
.NET (Gateway/Manager API)
string CIMTConLeverageRule.Path()  
---  
Python (Manager API)
MTConLeverageRule.Path  
---  
Return Value
If successful, it returns a pointer to a string with the configuration name. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid throughout the lifetime of the [IMTConLeverageRule](imtconleveragerule.md "IMTConLeverageRule") object.
To use the string after the object is deleted (by calling the [IMTConLeverageRule::Release](imtconleveragerule_release.md "Release") method of this object), you should create its copy.
IMTConLeverageRule::Path
Set the path to a symbol or group of symbols for which the floating margin rule is applied.
C++
MTAPIRES IMTConLeverageRule::Path( LPCWSTR path // Path )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConLeverageRule.Path( srting path // Path )  
---  
Python (Manager API)
MTConLeverageRule.Path  
---  
Parameters
path
[in] Path to a symbol or a group of symbols. For example, Forex\EURUSD or CFD\\*.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum path length is 128 characters (including the end-of-string character). If a longer string is assigned, it will be truncated to this length.