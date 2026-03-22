# CompanySupportEmail (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ CompanySupportEmail | [](imtcongroup_companysupportpage.md "CompanySupportPage") [](imtcongroup_companycatalog.md "CompanyCatalog") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::CompanySupportEmail
Get the technical support email address of the company that services the group.
C++
LPCWSTR IMTConGroup::CompanySupportEmail() const  
---  
.NET (Gateway/Manager API)
string CIMTConGroup.CompanySupportEmail()  
---  
Python (Manager API)
MTConGroup.CompanySupportEmail  
---  
Return Value
If successful, it returns a pointer to a string with the company's email address for technical support. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConGroup](imtcongroup.md "IMTConGroup") object.
To use the string after the object removal (call of the [IMTConGroup::Release](imtcongroup_release.md "Release") method of this object), a copy of it should be created.
IMTConGroup::CompanySupportEmail
Set the technical support email address of the company that services the group.
C++
MTAPIRES IMTConGroup::CompanySupportEmail( LPCWSTR email // Email address )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.CompanySupportEmail( string email // Email address )  
---  
Python (Manager API)
MTConGroup.CompanySupportEmail  
---  
Parameters
email
[in] The technical support email address of the company that manages the group.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum length of the email address is 256 characters (with the sign of the string end). If a string of a greater length is assigned, it will be cut to this length.