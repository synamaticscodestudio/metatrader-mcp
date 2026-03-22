# CountryDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ KYC ](config_kyc.md "KYC") / [ IMTConKYC ](imtconkyc.md "IMTConKYC")/ CountryDelete | [](imtconkyc_countryupdate.md "CountryUpdate") [](imtconkyc_countryclear.md "CountryClear") |
| --- | --- | --- |
| --- | --- |

IMTConKYC::CountryDelete
Delete the country for which the KYC provider is used.
C++
MTAPIRES IMTConKYC::CountryDelete( const UINT pos // Country position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConKYC.CountryDelete( uint pos // Country position )  
---  
Parameters
pos
[in] The position of the country in the list, starting from 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code has occurred.