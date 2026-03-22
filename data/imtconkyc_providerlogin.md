# ProviderLogin (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ KYC ](config_kyc.md "KYC") / [ IMTConKYC ](imtconkyc.md "IMTConKYC")/ ProviderLogin | [](imtconkyc_provideraddress.md "ProviderAddress") [](imtconkyc_providerpassword.md "ProviderPassword") |
| --- | --- | --- |
| --- | --- |

IMTConKYC::ProviderLogin
Get the login of the account used for connecting to the KYC-provider.
C++
LPCWSTR IMTConKYC::ProviderLogin() const  
---  
.NET (Gateway/Manager API)
string CIMTConKYC.ProviderLogin()  
---  
Return Value
If successful, the method returns a pointer to a string with the login. Otherwise, NULL is returned.
Note
The availability of (and the need to fill) this parameter depends on the selected KYC provider ([IMTConKYC::ProviderType](imtconkyc_providertype.md "ProviderType")). Please contact the provider for details.
In the [Sum & Substance](https://support.metaquotes.net/en/docs/mt5/platform/administration/integration/integration_kyc#sumsub) provider configuration, this field is used for specifying the verification level.
A pointer to the resulting string is valid for the lifetime of the [IMTConKYC](imtconkyc.md "IMTConKYC") object.
You should create a copy of the string if you want to use it after deleting the object (calling the [IMTConKYC::Release](imtconkyc_release.md "Release") method of this object).
IMTConKYC::ProviderLogin
Set the login of the account used for connecting to the KYC-provider.
C++
MTAPIRES IMTConKYC::ProviderLogin( LPCWSTR login // Login )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConKYC.ProviderLogin( srting login // Login )  
---  
Parameters
name
[in] The login of the account used for connecting to the KYC-provider.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code has occurred.
Note
The availability of (and the need to fill) this parameter depends on the selected KYC provider ([IMTConKYC::ProviderType](imtconkyc_providertype.md "ProviderType")). Please contact the provider for details.
In the [Sum & Substance](https://support.metaquotes.net/en/docs/mt5/platform/administration/integration/integration_kyc#sumsub) provider configuration, this field is used for specifying the verification level.
The maximum login length is limited to 128 characters (including the end-of-line character). If a string of a greater length is assigned, it will be truncated to this length.