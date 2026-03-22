# ProviderToken (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ KYC ](config_kyc.md "KYC") / [ IMTConKYC ](imtconkyc.md "IMTConKYC")/ ProviderToken | [](imtconkyc_providerpassword.md "ProviderPassword") [](imtconkyc_flags.md "Flags") |
| --- | --- | --- |
| --- | --- |

IMTConKYC::ProviderToken
Get the authorization token used for connection to the KYC provider.
C++
LPCWSTR IMTConKYC::ProviderToken() const  
---  
.NET (Gateway/Manager API)
string CIMTConKYC.ProviderToken()  
---  
Return Value
If successful, the method returns a pointer to a string with the token. Otherwise, NULL is returned.
Note
The availability of (and the need to fill) this parameter depends on the selected KYC provider ([IMTConKYC::ProviderType](imtconkyc_providertype.md "ProviderType")). Please contact the provider for details.
A pointer to the resulting string is valid for the lifetime of the [IMTConKYC](imtconkyc.md "IMTConKYC") object.
You should create a copy of the string if you want to use it after deleting the object (calling the [IMTConKYC::Release](imtconkyc_release.md "Release") method of this object).
IMTConKYC::ProviderToken
Set the authorization token used for connection to the KYC provider.
C++
MTAPIRES IMTConKYC::ProviderToken( LPCWSTR token // Authorization token )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConKYC.ProviderToken( srting token // Authorization token )  
---  
Parameters
token
[in] The authentication token, which is used for connecting to the KYC provider.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code has occurred.
Note
The availability of (and the need to fill) this parameter depends on the selected KYC provider ([IMTConKYC::ProviderType](imtconkyc_providertype.md "ProviderType")). Please contact the provider for details.
The maximum token length is 128 characters (including the end-of-line character). If a string of a greater length is assigned, it will be truncated to this length.