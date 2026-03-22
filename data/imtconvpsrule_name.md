# Name (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPSRule ](imtconvpsrule.md "IMTConVPSRule")/ Name | [](imtconvpsrule_enabled.md "Enabled") [](imtconvpsrule_conditionadd.md "ConditionAdd") |
| --- | --- | --- |
| --- | --- |

IMTConVPSRule::Name
Get the name of the VPS allocation rule.
C++
LPCWSTR IMTConVPSRule::Name() const  
---  
.NET (Gateway/Manager API)
string CIMTConVPSRule.Name()  
---  
Python
MTConVPSRule.Name  
---  
Return Value
In case of success, the method returns a pointer to a string with the rule name. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConVPSRule](imtconvpsrule.md "IMTConVPSRule") object.
To use the string after the object removal (after the call of the [IMTConVPSRule::Release](imtconvpsrule_release.md "Release") method of this object), you should create the string copy.
IMTConVPSRule::Name
Set the name for the VPS allocation rule.
C++
MTAPIRES IMTConVPSRule::Name( LPCWSTR name // Rule name )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPSRule.Name( string name // Rule name )  
---  
Python
MTConVPSRule.Name  
---  
Parameters
name
[in] Rule name.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.
Note
The name length is limited to 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be truncates to the required length.