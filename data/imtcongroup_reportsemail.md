# ReportsEmail (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ ReportsEmail | [](imtcongroup_reportsflags.md "ReportsFlags") [](imtcongroup_reportssmtp.md "ReportsSMTP") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::ReportsEmail
Get the mail server which is used for sending reports to clients in the group.
C++
LPCWSTR IMTConGroup::ReportsEmail() const  
---  
.NET (Gateway/Manager API)
string CIMTConGroup.ReportsEmail()  
---  
Python (Manager API)
MTConGroup.ReportsEmail  
---  
Return Value
If successful, it returns a pointer to a string with the mail server configuration name. If a default mail server is set for the group, an empty string is returned. NULL is returned if there is an error.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConGroup](imtcongroup.md "IMTConGroup") object.
You should create a string copy if you want to use it after the object removal (call of the [IMTConGroup::Release](imtcongroup_release.md "Release") method of this object).
Mail servers can be configured in the [Integration](https://support.metaquotes.net/en/docs/mt5/platform/administration/integration#mail) section of MetaTrader 5 Administrator.
IMTConGroup::ReportsEmail
Set the mail server to be used for sending reports to clients in the group.
C++
MTAPIRES IMTConGroup::ReportsEmail( LPCWSTR email // Mail server )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.ReportsEmail( string email // Mail server )  
---  
Python (Manager API)
MTConGroup.ReportsEmail  
---  
Parameters
catalog
[in] Mail server configuration name. To set the default mail server, pass in an empty string.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The maximum server address length is 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.
Mail servers can be configured in the [Integration](https://support.metaquotes.net/en/docs/mt5/platform/administration/integration#mail) section of MetaTrader 5 Administrator.