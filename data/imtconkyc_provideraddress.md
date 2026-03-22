# ProviderAddress (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ KYC ](config_kyc.md "KYC") / [ IMTConKYC ](imtconkyc.md "IMTConKYC")/ ProviderAddress | [](imtconkyc_providertype.md "ProviderType") [](imtconkyc_providerlogin.md "ProviderLogin") |
| --- | --- | --- |
| --- | --- |

IMTConKYC::ProviderAddress
Get the KYC provider's server address in the configuration.
C++
LPCWSTR IMTConKYC::ProviderAddress() const  
---  
.NET (Gateway/Manager API)
string CIMTConKYC.ProviderAddress()  
---  
Return Value
If successful, a pointer to a string with the server address is returned. Otherwise, NULL is returned.
Note
The availability of (and the need to fill) this parameter depends on the selected KYC provider ([IMTConKYC::ProviderType](imtconkyc_providertype.md "ProviderType")). Please contact the provider for details.
A pointer to the resulting string is valid for the lifetime of the [IMTConKYC](imtconkyc.md "IMTConKYC") object.
You should create a copy of the string if you want to use it after deleting the object (calling the [IMTConKYC::Release](imtconkyc_release.md "Release") method of this object).
IMTConKYC::ProviderAddress
Set the KYC provider's server address in the configuration.
C++
MTAPIRES IMTConKYC::ProviderAddress( LPCWSTR address // Server address )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConKYC.ProviderAddress( srting address // Server address )  
---  
Parameters
name
[in] Provider's server address.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code has occurred.
Note
The availability of (and the need to fill) this parameter depends on the selected KYC provider ([IMTConKYC::ProviderType](imtconkyc_providertype.md "ProviderType")). Please contact the provider for details.
The address length is limited to 128 characters (including the end-of-line character). If a string of a greater length is assigned, it will be truncated to this length.