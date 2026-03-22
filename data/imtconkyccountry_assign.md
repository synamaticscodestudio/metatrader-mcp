# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ KYC ](config_kyc.md "KYC") / [ IMTConKYCCountry ](imtconkyccountry.md "IMTConKYCCountry")/ Assign | [](imtconkyccountry_release.md "Release") [](imtconkyccountry_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConKYCCountry::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConKYCCountry::Assign( const IMTConKYCCountry* country // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConKYCCountry.Assign( CIMTConKYCCountry country // Source object )  
---  
Parameters
country
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code has occurred.