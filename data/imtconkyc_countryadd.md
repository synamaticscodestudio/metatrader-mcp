# CountryAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ KYC ](config_kyc.md "KYC") / [ IMTConKYC ](imtconkyc.md "IMTConKYC")/ CountryAdd | [](imtconkyc_flags.md "Flags") [](imtconkyc_countryupdate.md "CountryUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConKYC::CountryAdd
Add a country for which the KYC provider will be used.
C++
MTAPIRES IMTConKYC::CountryAdd( IMTConKYCCountry* country // Country object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConKYC.CountryAdd( CIMTConKYCCountry country // Country object )  
---  
Parameters
country
[in] The [IMTConKYCCountry](imtconkyccountry.md "IMTConKYCCountry") country object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code has occurred.