# Company (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ Company | [](imtcongroup_authpasswordmin.md "AuthPasswordMin") [](imtcongroup_companypage.md "CompanyPage") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::Company
Get the name of the company that services the group.
C++
LPCWSTR IMTConGroup::Company() const  
---  
.NET (Gateway/Manager API)
string CIMTConGroup.Company()  
---  
Python (Manager API)
MTConGroup.Company  
---  
Return Value
If successful, it returns a pointer to a string with the name of the company. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConGroup](imtcongroup.md "IMTConGroup") object.
To use the string after the object removal (call of the [IMTConGroup::Release](imtcongroup_release.md "Release") method of this object), a copy of it should be created.
IMTConGroup::Company
Set the name of the company that services the group.
C++
MTAPIRES IMTConGroup::Company( LPCWSTR company // Company name )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.Company( string company // Company name )  
---  
Python (Manager API)
MTConGroup.Company  
---  
Parameters
company
[in] Name of the company that services the group.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The maximum company name length is 71 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.
When adding or changing a group, the Company field is checked against the platform license. You can only specify the company which owns the main or additional [White Label](https://support.metaquotes.net/ru/docs/mt5/platform/platform_installation/white_label). If you try to save a group with any other company name, the server will return the [MT_RET_CFG_INVALID_COMPANY](retcodes_configs.md "Configuration Management") error.