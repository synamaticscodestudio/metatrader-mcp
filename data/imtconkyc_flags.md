# Flags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ KYC ](config_kyc.md "KYC") / [ IMTConKYC ](imtconkyc.md "IMTConKYC")/ Flags | [](imtconkyc_providertoken.md "ProviderToken") [](imtconkyc_countryadd.md "CountryAdd") |
| --- | --- | --- |
| --- | --- |

IMTConKYC::Flags
Get additional settings of the KYC provider.
C++
UINT64 IMTConKYC::Flags() const  
---  
.NET (Gateway/Manager API)
EnFlags CIMTConKYC.Flags()  
---  
Return Value
Additional settings as the values of the [IMTConKYC::EnFlags](imtconkyc_enum.htm#enflags) enumeration.
IMTConKYC::Flags
Set additional settings of the KYC provider.
C++
MTAPIRES IMTConKYC::Flags( const UINT64 flags // KYC provider settings )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConKYC.Flags( EnFlags flags // KYC provider settings )  
---  
Parameters
flags
[in] Additional settings as the values of the [IMTConKYC::EnFlags](imtconkyc_enum.htm#enflags) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code has occurred.