# CompanyCatalog (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ CompanyCatalog | [](imtcongroup_companysupportemail.md "CompanySupportEmail") [](imtcongroup_companydepositpage.md "CompanyDepositPage") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::CompanyCatalog
Get the name of the subdirectory that stores the templates of reports, emails, etc. for the company that services this group.
C++
LPCWSTR IMTConGroup::CompanyCatalog() const  
---  
.NET (Gateway/Manager API)
string CIMTConGroup.CompanyCatalog()  
---  
Python (Manager API)
MTConGroup.CompanyCatalog  
---  
Return Value
If successful, it returns a pointer to a string with the name of the templates directory of the company that services this group. Otherwise, it returns NULL.
Note
The templates subdirectory of the company is located in the standard templates folder of the server.
The pointer to the resulting string is valid for the lifetime of the [IMTConGroup](imtcongroup.md "IMTConGroup") object.
To use the string after the object removal (call of the [IMTConGroup::Release](imtcongroup_release.md "Release") method of this object), a copy of it should be created.
IMTConGroup::CompanyCatalog
Set the name of the subdirectory that stores the templates of reports, emails, etc. for the company that services this group.
C++
MTAPIRES IMTConGroup::CompanyCatalog( LPCWSTR catalog // The name of the templates subdirectory )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.CompanyCatalog( string catalog // The name of the templates subdirectory )  
---  
Python (Manager API)
MTConGroup.CompanyCatalog  
---  
Parameters
catalog
[in] The name of the subdirectory that stores the templates of reports, emails, etc. for the company that services this group.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The templates subdirectory of the company is located in the standard templates folder of the server.
The maximum length of the directory name is 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.