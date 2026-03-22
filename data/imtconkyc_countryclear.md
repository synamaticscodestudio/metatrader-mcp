# CountryClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ KYC ](config_kyc.md "KYC") / [ IMTConKYC ](imtconkyc.md "IMTConKYC")/ CountryClear | [](imtconkyc_countrydelete.md "CountryDelete") [](imtconkyc_countryshift.md "CountryShift") |
| --- | --- | --- |
| --- | --- |

IMTConKYC::CountryClear
Clear the list of countries for which the KYC provider is used.
C++
MTAPIRES IMTConKYC::CountryClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConKYC.CountryClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code has occurred.
Note
This method removes from the list all countries for which the KYC provider is used.