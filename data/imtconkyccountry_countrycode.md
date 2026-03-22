# CountryCode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ KYC ](config_kyc.md "KYC") / [ IMTConKYCCountry ](imtconkyccountry.md "IMTConKYCCountry")/ CountryCode | [](imtconkyccountry_clear.md "Clear") [](imtconkycgroup.md "IMTConKYCGroup") |
| --- | --- | --- |
| --- | --- |

IMTConKYCCountry::CountryCode
Get the country code specified in the KYC provider configuration.
C++
LPCWSTR IMTConKYCCountry::CountryCode() const  
---  
.NET (Gateway/Manager API)
string CIMTConKYCCountry.CountryCode()  
---  
Return Value
If successful, a pointer to a string with a three-digit [ISO 3166](https://en.wikipedia.org/wiki/ISO_3166) country code is returned. Otherwise, NULL is returned.
Note
A pointer to the resulting string is valid for the lifetime of the [IMTConKYCCountry](imtconkyccountry.md "IMTConKYCCountry") object.
You should create a copy of the string if you want to use it after deleting the object (calling the [IMTConKYCCountry::Release](imtconkyccountry_release.md "Release") method of this object).
IMTConKYCCountry::CountryCode
Set a country code in the KYC provider settings.
C++
MTAPIRES IMTConKYCCountry::CountryCode( LPCWSTR code // Country code )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConKYCCountry.CountryCode( srting code // Country code )  
---  
Parameters
code
[in] Three-digit [ISO 3166](https://en.wikipedia.org/wiki/ISO_3166) country code.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code has occurred.