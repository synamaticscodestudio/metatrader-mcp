# CompanyPage (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ CompanyPage | [](imtcongroup_company.md "Company") [](imtcongroup_companyemail.md "CompanyEmail") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::CompanyPage
Get the website address of the company that services the group.
C++
LPCWSTR IMTConGroup::CompanyPage() const  
---  
.NET (Gateway/Manager API)
string CIMTConGroup.CompanyPage()  
---  
Python (Manager API)
MTConGroup.CompanyPage  
---  
Return Value
If successful, it returns a pointer to a string with the company's website address. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConGroup](imtcongroup.md "IMTConGroup") object.
To use the string after the object removal (call of the [IMTConGroup::Release](imtcongroup_release.md "Release") method of this object), a copy of it should be created.
IMTConGroup::CompanyPage
Set the website address of the company that services the group.
C++
MTAPIRES IMTConGroup::CompanyPage( LPCWSTR page // Website address )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.CompanyPage( string  page // Website address )  
---  
Python (Manager API)
MTConGroup.CompanyPage  
---  
Parameters
page
[in] The website address of the company that services the group.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum length of the website address is 256 characters (with the sign of the string end). If a string of a greater length is assigned, it will be cut to this length.