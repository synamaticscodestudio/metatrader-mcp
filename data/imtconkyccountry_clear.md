# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ KYC ](config_kyc.md "KYC") / [ IMTConKYCCountry ](imtconkyccountry.md "IMTConKYCCountry")/ Clear | [](imtconkyccountry_assign.md "Assign") [](imtconkyccountry_countrycode.md "CountryCode") |
| --- | --- | --- |
| --- | --- |

IMTConKYCCountry::Clear
Clear an object.
C++
MTAPIRES IMTConKYCCountry::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConKYCCountry.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code has occurred.
Note
This method cleans all fields ​​and removes embedded objects.