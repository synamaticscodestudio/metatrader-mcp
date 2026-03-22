# CompanySupportPage (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ CompanySupportPage | [](imtcongroup_companyemail.md "CompanyEmail") [](imtcongroup_companysupportemail.md "CompanySupportEmail") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::CompanySupportPage
Get the website address of the technical support of the company that services the group.
C++
LPCWSTR IMTConGroup::CompanySupportPage() const  
---  
.NET (Gateway/Manager API)
string CIMTConGroup.CompanySupportPage()  
---  
Python (Manager API)
MTConGroup.CompanySupportPage  
---  
Return Value
If successful, it returns a pointer to a string with the company's technical support website address. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConGroup](imtcongroup.md "IMTConGroup") object.
To use the string after the object removal (call of the [IMTConGroup::Release](imtcongroup_release.md "Release") method of this object), a copy of it should be created.
IMTConGroup::CompanySupportPage
Set the website address of the technical support of the company that services the group.
C++
MTAPIRES IMTConGroup::CompanySupportPage( LPCWSTR page // Website address )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.CompanySupportPage( string page // Website address )  
---  
Python (Manager API)
MTConGroup.CompanySupportPage  
---  
Parameters
page
[in] The technical support website address of the company that manages the group.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum length of the website address is 256 characters (with the sign of the string end). If a string of a greater length is assigned, it will be cut to this length.