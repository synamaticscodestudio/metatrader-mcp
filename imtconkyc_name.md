# Name (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ KYC ](config_kyc.md "KYC") / [ IMTConKYC ](imtconkyc.md "IMTConKYC")/ Name | [](imtconkyc_clear.md "Clear") [](imtconkyc_providertype.md "ProviderType") |
| --- | --- | --- |
| --- | --- |

IMTConKYC::Name
Get the name of the KYC provider configuration.
C++
LPCWSTR IMTConKYC::Name() const  
---  
.NET (Gateway/Manager API)
string CIMTConKYC.Name()  
---  
Return Value
If successful, the method returns a pointer to a string with the configuration name. Otherwise, NULL is returned.
Note
A pointer to the resulting string is valid for the lifetime of the [IMTConKYC](imtconkyc.md "IMTConKYC") object.
You should create a copy of the string if you want to use it after deleting the object (calling the [IMTConKYC::Release](imtconkyc_release.md "Release") method of this object).
IMTConKYC::Name
Set the name of the KYC provider configuration.
C++
MTAPIRES IMTConKYC::Name( LPCWSTR name // Provider configuration name )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConKYC.Name( srting name // Provider configuration name )  
---  
Parameters
name
[in] Provider configuration name.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code has occurred.
Note
The name length is limited to 128 characters (including the end-of-line character). If a string of a greater length is assigned, it will be truncated to this length.