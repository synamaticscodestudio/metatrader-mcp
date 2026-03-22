# ProviderType (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ KYC ](config_kyc.md "KYC") / [ IMTConKYC ](imtconkyc.md "IMTConKYC")/ ProviderType | [](imtconkyc_name.md "Name") [](imtconkyc_provideraddress.md "ProviderAddress") |
| --- | --- | --- |
| --- | --- |

IMTConKYC::ProviderType
Get the KYC service provider selected in the configuration.
C++
UINT IMTConKYC::ProviderType() const  
---  
.NET (Gateway/Manager API)
EnProviderType CIMTConKYC.ProviderType()  
---  
Return Value
KYC service provider. Passes by the [IMTConKYC::EnProviderType](imtconkyc_enum.htm#enprovidertype) enumeration value.
IMTConKYC::Mode
Set the KYC service provider in the configuration.
C++
MTAPIRES IMTConKYC::ProviderType( const UINT provider // Provider )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConKYC.ProviderType( EnProviderType provider // Provider )  
---  
Parameters
provider
[in] KYC service provider. Passes by the [IMTConKYC::EnProviderType](imtconkyc_enum.htm#enprovidertype) enumeration value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code has occurred.