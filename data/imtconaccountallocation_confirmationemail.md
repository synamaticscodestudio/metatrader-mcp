# ConfirmationEmail (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConAccountAllocation ](imtconaccountallocation.md "IMTConAccountAllocation")/ ConfirmationEmail | [](imtconaccountallocation_countries.md "Countries") [](imtconaccountallocation_accountagreementadd.md "AccountAgreementAdd") |
| --- | --- | --- |
| --- | --- |

IMTConAccountAllocation::ConfirmationEmail
Get the [mail server](imtconemail.md "IMTConEmail") which will be used for email confirmations when opening accounts in this group.
C++
LPCWSTR IMTConAccountAllocation::ConfirmationEmail() const  
---  
.NET (Gateway/Manager API)
string CIMTConAccountAllocation.ConfirmationEmail()  
---  
Return Value
The method returns a pointer to a string with the mail server name on success. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConAccountAllocation](imtconaccountallocation.md "IMTConAccountAllocation") object.
To use the string after the object removal (after the call of the [IMTConAccountAllocation::Release](imtconaccountallocation_release.md "Release") method of this object), you should create the string copy.
IMTConAccountAllocation::ConfirmationEmail
Set the [mail server](imtconemail.md "IMTConEmail") which will be used for email confirmations when opening accounts in this group.
C++
MTAPIRES IMTConAccountAllocation::ConfirmationEmail( LPCWSTR email // Mail server )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAccountAllocation.ConfirmationEmail( string email // Mail server )  
---  
Parameters
email
[in] Mail server name. Corresponds to [IMTConEmail::Name](imtconemail_name.md "Name").
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.
Note
The length of the list is limited to 64 characters (including the newline character). If a string of a greater length is assigned, it will be truncates to the required length.