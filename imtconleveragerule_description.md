# Description (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverageRule ](imtconleveragerule.md "IMTConLeverageRule")/ Description | [](imtconleveragerule_name.md "Name") [](imtconleveragerule_path.md "Path") |
| --- | --- | --- |
| --- | --- |

IMTConLeverageRule::Description
Get the description of a rule in a floating margin configuration.
C++
LPCWSTR IMTConLeverageRule::Description() const  
---  
.NET (Gateway/Manager API)
string CIMTConLeverageRule.Description()  
---  
Python (Manager API)
MTConLeverageRule.Description  
---  
Return Value
If successful, the method returns a pointer to a string with the rule description. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid throughout the lifetime of the [IMTConLeverageRule](imtconleveragerule.md "IMTConLeverageRule") object.
To use the string after the object is deleted (by calling the [IMTConLeverageRule::Release](imtconleveragerule_release.md "Release") method of this object), you should create its copy.
IMTConLeverageRule::Description
Set the description of a rule in a floating margin configuration.
C++
MTAPIRES IMTConLeverageRule::Description( LPCWSTR descr // Rule description )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConLeverageRule.Description( srting descr // Rule description )  
---  
Python (Manager API)
MTConLeverageRule.Description  
---  
Parameters
descr
[in] Rule description.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum description length is 64 characters (including the end-of-string character). If a longer string is assigned, it will be truncated to this length.