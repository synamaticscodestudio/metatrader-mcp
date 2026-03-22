# CountryUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ KYC ](config_kyc.md "KYC") / [ IMTConKYC ](imtconkyc.md "IMTConKYC")/ CountryUpdate | [](imtconkyc_countryadd.md "CountryAdd") [](imtconkyc_countrydelete.md "CountryDelete") |
| --- | --- | --- |
| --- | --- |

IMTConKYC::CountryUpdate
Change the country for which the KYC provider is used.
C++
MTAPIRES IMTConKYC::CountryUpdate( const UINT pos, // Country position const IMTConKYCCountry* country // Country object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConKYC.CountryUpdate( uint pos, // Country position CIMTConKYCCountry country // Country object )  
---  
Parameters
pos
[in] The position of the country in the list, starting from 0.
country
[in] The [IMTConKYCCountry](imtconkyccountry.md "IMTConKYCCountry") country object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code has occurred.