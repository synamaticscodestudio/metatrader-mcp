# MarginFloatingLeverage (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ MarginFloatingLeverage | [](imtcongroup_marginflags.md "MarginFlags") [](imtcongroup_demoleverage.md "DemoLeverage") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::MarginFloatingLeverage
Get the [floating margin](imtconleverage.md "IMTConLeverage") profile applied to the group.
C++
LPCWSTR IMTConGroup::MarginFloatingLeverage() const  
---  
.NET (Gateway/Manager API)
string CIMTConGroup.MarginFloatingLeverage()  
---  
Python (Manager API)
MTConGroup.MarginFloatingLeverage  
---  
Return Value
If successful, a pointer to a string with the profile name is returned. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid throughout the lifetime of the [IMTConGroup](imtcongroup.md "IMTConGroup") object.
To use the string after the object is deleted (by calling the [IMTConGroup::Release](imtcongroup_release.md "Release") method of this object), you should create its copy.
IMTConGroup::MarginFloatingLeverage
Set a [floating margin](imtconleverage.md "IMTConLeverage") profile for the group.
C++
MTAPIRES IMTConGroup::MarginFloatingLeverage( LPCWSTR name // Profile name )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.MarginFloatingLeverage( string name // Profile name )  
---  
Python (Manager API)
MTConGroup.MarginFloatingLeverage  
---  
Parameters
name
[in] Name of the floating margin profile. Corresponds to [IMTConLeverage::Name](imtconleverage_name.md "Name").
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The name length is limited to 64 characters (including the end-of-string character). If a longer string is assigned, it will be truncated to this length.