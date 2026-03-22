# CountryNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ KYC ](config_kyc.md "KYC") / [ IMTConKYC ](imtconkyc.md "IMTConKYC")/ CountryNext | [](imtconkyc_countrytotal.md "CountryTotal") [](imtconkyc_groupadd.md "GroupAdd") |
| --- | --- | --- |
| --- | --- |

IMTConKYC::CountryNext
Get the country for which the KYC provider is used by its index in the list.
C++
MTAPIRES IMTConKYC::CountryNext( const UINT pos, // Country position IMTConKYCCountry* country // Country object ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConKYC.CountryNext( uint pos, // Country position CIMTConKYCCountry country // Country object )  
---  
Parameters
pos
[in] The position of the country in the list, starting from 0.
country
[out] Country object. The 'country' object must be created in advance using the [IMTServerAPI::KYCCountryCreate](imtserverapi_kyccountrycreate.md "KYCCountryCreate") or [IMTAdminAPI::KYCCountryCreate](imtadminapi_kyccountrycreate.md "KYCCountryCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code has occurred.