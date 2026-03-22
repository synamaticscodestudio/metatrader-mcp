# Name (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverage ](imtconleverage.md "IMTConLeverage")/ Name | [](imtconleverage_clear.md "Clear") [](imtconleverage_ruleadd.md "RuleAdd") |
| --- | --- | --- |
| --- | --- |

IMTConLeverage::Name
Get the name of a floating margin configuration rule.
C++
LPCWSTR IMTConLeverage::Name() const  
---  
.NET (Gateway/Manager API)
string CIMTConLeverage.Name()  
---  
Python (Manager API)
MTConLeverage.Name  
---  
Return Value
If successful, it returns a pointer to a string with the configuration name. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid throughout the lifetime of the [IMTConLeverage](imtconleverage.md "IMTConLeverage") object.
To use the string after the object is deleted (by calling the [IMTConLeverage::Release](imtconleverage_release.md "Release") method of this object), you should create its copy.
IMTConLeverage::Name
Set a name for the floating margin configuration.
C++
MTAPIRES IMTConLeverage::Name( LPCWSTR name // Configuration name )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConLeverage.Name( srting name // Configuration name )  
---  
Python (Manager API)
MTConLeverage.Name  
---  
Parameters
name
[in] Configuration name.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The name length is limited to 64 characters (including the end-of-string character). If a longer string is assigned, it will be truncated to this length.