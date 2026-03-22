# ReportsSMTPPass (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ ReportsSMTPPass | [](imtcongroup_reportssmtplogin.md "ReportsSMTPLogin") [](imtcongroup_newsmode.md "NewsMode") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::ReportsSMTPPass
Get a password for the authorization on the SMTP server that is used for sending reports.
C++
LPCWSTR IMTConGroup::ReportsSMTPPass() const  
---  
.NET (Gateway/Manager API)
string CIMTConGroup.ReportsSMTPPass()  
---  
Python (Manager API)
MTConGroup.ReportsSMTPPass  
---  
Return Value
If successful, it returns a pointer to a string with a password on the SMTP server. Otherwise, it returns NULL.
Note
The method is obsolete and is no longer used. It always returns an empty line. Please use [IMTConGroup::ReportsEmail](imtcongroup_reportsemail.md "ReportsEmail") instead.
The pointer to the resulting string is valid for the lifetime of the [IMTConGroup](imtcongroup.md "IMTConGroup") object.
To use the string after the object removal (call of the [IMTConGroup::Release](imtcongroup_release.md "Release") method of this object), a copy of it should be created.
IMTConGroup::ReportsSMTPPass
Set a password for the authorization on the SMTP server that is used for sending reports.
C++
MTAPIRES IMTConGroup::ReportsSMTPPass( LPCWSTR password // Password )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.ReportsSMTPPass( string password // Password )  
---  
Python (Manager API)
MTConGroup.ReportsSMTPPass  
---  
Parameters
password
[in] A password for the authorization on the SMTP server that is used for sending reports.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method is obsolete and is no longer used. It always returns [MT_RET_OK](retcodes_successful.md "Successful completion"). Please use [IMTConGroup::ReportsEmail](imtcongroup_reportsemail.md "ReportsEmail") instead.
The maximum password length is 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.