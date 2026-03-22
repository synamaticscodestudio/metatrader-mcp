# URL (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConAccountAgreement ](imtconaccountagreement.md "IMTConAccountAgreement")/ URL | [](imtconaccountagreement_captioncustomtext.md "CaptionCustomText") [](imtconaccountagreement_flags.md "Flags") |
| --- | --- | --- |
| --- | --- |

IMTConAccountAgreement::URL
Get the agreement link.
C++
LPCWSTR IMTConAccountAgreement::URL() const  
---  
.NET (Gateway/Manager API)
string CIMTConAccountAgreement.URL()  
---  
Return Value
The method returns a pointer to the string with the server name on success. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConAccountAgreement](imtconaccountagreement.md "IMTConAccountAgreement") object.
To use the string after the object removal (after the call of the [IMTConAccountAgreement::Release](imtconaccountagreement_release.md "Release") method of this object), you should create the string copy.
IMTConAccountAgreement::URL
Set the agreement link.
C++
MTAPIRES IMTConAccountAgreement::URL( LPCWSTR name // Agreement link )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAccountAgreement.URL( string name // Agreement link )  
---  
Parameters
url
[in] Agreement link.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.
Note
The link length is limited to 256 characters (including the newline character). If a string of a greater length is assigned, it will be truncates to the required length.