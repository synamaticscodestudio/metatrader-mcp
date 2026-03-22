# CaptionCustomText (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConAccountAgreement ](imtconaccountagreement.md "IMTConAccountAgreement")/ CaptionCustomText | [](imtconaccountagreement_captiontype.md "CaptionType") [](imtconaccountagreement_url.md "URL") |
| --- | --- | --- |
| --- | --- |

IMTConAccountAgreement::Name
Get the name of the user agreement.
C++
LPCWSTR IMTConAccountAgreement::Name() const  
---  
.NET (Gateway/Manager API)
string CIMTConAccountAgreement.Name()  
---  
Return Value
The method returns a pointer to the string with the server name on success. Otherwise, NULL is returned.
Note
The method is only used for the [IMTConAccountAgreement::CAPTION_CUSTOM](imtconaccountagreement_enum.htm#encaptiontype) agreement types.
The pointer to the resulting string is valid for the lifetime of the [IMTConAccountAgreement](imtconaccountagreement.md "IMTConAccountAgreement") object.
To use the string after the object removal (after the call of the [IMTConAccountAgreement::Release](imtconaccountagreement_release.md "Release") method of this object), you should create the string copy.
IMTConAccountAgreement::Name
Setting the name for the user agreement.
C++
MTAPIRES IMTConAccountAgreement::Name( LPCWSTR name // Agreement name )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAccountAgreement.Name( string name // Agreement name )  
---  
Parameters
name
[in] The name of the user agreement.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method is only used for the [IMTConAccountAgreement::CAPTION_CUSTOM](imtconaccountagreement_enum.htm#encaptiontype) agreement types.
The name length is limited to 256 characters (including the newline character). If a string of a greater length is assigned, it will be truncates to the required length. The agreement will be displayed in the account opening dialog, and thus its name should be short.