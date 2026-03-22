# ProviderPassword (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ KYC ](config_kyc.md "KYC") / [ IMTConKYC ](imtconkyc.md "IMTConKYC")/ ProviderPassword | [](imtconkyc_providerlogin.md "ProviderLogin") [](imtconkyc_providertoken.md "ProviderToken") |
| --- | --- | --- |
| --- | --- |

IMTConKYC::ProviderPassword
Get the password of the account used for connecting to the KYC-provider.
C++
LPCWSTR IMTConKYC::ProviderPassword() const  
---  
.NET (Gateway/Manager API)
string CIMTConKYC.ProviderPassword()  
---  
Return Value
If successful, the method returns a pointer to a string with the password. Otherwise, NULL is returned.
Note
The availability of (and the need to fill) this parameter depends on the selected KYC provider ([IMTConKYC::ProviderType](imtconkyc_providertype.md "ProviderType")). Please contact the provider for details.
In the [Sum & Substance](https://support.metaquotes.net/en/docs/mt5/platform/administration/integration/integration_kyc#sumsub) provider configuration, this field is used for specifying the secret key.
A pointer to the resulting string is valid for the lifetime of the [IMTConKYC](imtconkyc.md "IMTConKYC") object.
You should create a copy of the string if you want to use it after deleting the object (calling the [IMTConKYC::Release](imtconkyc_release.md "Release") method of this object).
IMTConKYC::ProviderPassword
Set the password of the account used for connecting to the KYC-provider.
C++
MTAPIRES IMTConKYC::ProviderPassword( LPCWSTR password // Password )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConKYC.ProviderPassword( srting password // Password )  
---  
Parameters
password
[in] The password of the account used for connecting to the KYC-provider.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code has occurred.
Note
The availability of (and the need to fill) this parameter depends on the selected KYC provider ([IMTConKYC::ProviderType](imtconkyc_providertype.md "ProviderType")). Please contact the provider for details.
In the [Sum & Substance](https://support.metaquotes.net/en/docs/mt5/platform/administration/integration/integration_kyc#sumsub) provider configuration, this field is used for specifying the secret key.
The maximum password length is limited to 128 characters (including the end-of-line character). If a string of a greater length is assigned, it will be truncated to this length.