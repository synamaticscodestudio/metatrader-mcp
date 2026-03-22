# ReportsSMTPLogin (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ ReportsSMTPLogin | [](imtcongroup_reportssmtp.md "ReportsSMTP") [](imtcongroup_reportssmtppass.md "ReportsSMTPPass") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::ReportsSMTPLogin
Get a login for the authorization on the SMTP server that is used for sending reports.
C++
LPCWSTR IMTConGroup::ReportsSMTPLogin() const  
---  
.NET (Gateway/Manager API)
string CIMTConGroup.ReportsSMTPLogin()  
---  
Python (Manager API)
MTConGroup.ReportsSMTPLogin  
---  
Return Value
If successful, it returns a pointer to a string with login on the SMTP server. Otherwise, it returns NULL.
Note
The method is obsolete and is no longer used. It always returns an empty line. Please use [IMTConGroup::ReportsEmail](imtcongroup_reportsemail.md "ReportsEmail") instead.
The pointer to the resulting string is valid for the lifetime of the [IMTConGroup](imtcongroup.md "IMTConGroup") object.
To use the string after the object removal (call of the [IMTConGroup::Release](imtcongroup_release.md "Release") method of this object), a copy of it should be created.
IMTConGroup::ReportsSMTPLogin
Set a login for the authorization on the SMTP server that is used for sending reports.
C++
MTAPIRES IMTConGroup::ReportsSMTPLogin( LPCWSTR login // Login )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.ReportsSMTPLogin( string  login // Login )  
---  
Python (Manager API)
MTConGroup.ReportsSMTPLogin  
---  
Parameters
login
[in] A login for the authorization on the SMTP server that is used for sending reports.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method is obsolete and is no longer used. It always returns [MT_RET_OK](retcodes_successful.md "Successful completion"). Please use [IMTConGroup::ReportsEmail](imtcongroup_reportsemail.md "ReportsEmail") instead.
The maximum login length is 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.