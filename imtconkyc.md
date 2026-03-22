# IMTConKYC (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ KYC ](config_kyc.md "KYC")/ IMTConKYC | [](config_kyc.md "KYC") [](imtconkyc_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTConKYC
The IMTConKYC class contains methods for getting and editing KYC provider configurations:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtconkyc_release.md "Release") | Delete the current object. |
| [Assign](imtconkyc_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtconkyc_clear.md "Clear") | Clear an object. |
| [Name](imtconkyc_name.md "Name") | Get and set the name of the KYC provider configuration. |
| [ProviderType](imtconkyc_providertype.md "ProviderType") | Get and set the KYC service provider in the configuration. |
| [ProviderAddress](imtconkyc_provideraddress.md "ProviderAddress") | Get and set the KYC provider's server address in the configuration. |
| [ProviderLogin](imtconkyc_providerlogin.md "ProviderLogin") | Get and set the login of the account used for connecting to the KYC-provider. |
| [ProviderPassword](imtconkyc_providerpassword.md "ProviderPassword") | Get and set the password of the account used for connecting to the KYC-provider. |
| [ProviderToken](imtconkyc_providertoken.md "ProviderToken") | Get and set the authorization token used for connection to the KYC provider. |
| [Flags](imtconkyc_flags.md "Flags") | Get and set additional settings of the KYC provider. |
| [CountryAdd](imtconkyc_countryadd.md "CountryAdd") | Add a country for which the KYC provider will be used. |
| [CountryUpdate](imtconkyc_countryupdate.md "CountryUpdate") | Change the country for which the KYC provider is used. |
| [CountryDelete](imtconkyc_countrydelete.md "CountryDelete") | Delete the country for which the KYC provider is used. |
| [CountryClear](imtconkyc_countryclear.md "CountryClear") | Clear the list of countries for which the KYC provider is used. |
| [CountryShift](imtconkyc_countryshift.md "CountryShift") | Shift a country in the KYC provider settings. |
| [CountryTotal](imtconkyc_countrytotal.md "CountryTotal") | Get the number of countries specified in the KYC provider settings. |
| [CountryNext](imtconkyc_countrynext.md "CountryNext") | Get the country for which the KYC provider is used by its index in the list. |
| [GroupAdd](imtconkyc_groupadd.md "GroupAdd") | Add a group of accounts for which the KYC provider will be used. |
| [GroupUpdate](imtconkyc_groupupdate.md "GroupUpdate") | Change the group of accounts for which the KYC provider is used. |
| [GroupDelete](imtconkyc_groupdelete.md "GroupDelete") | Delete the group of accounts for which the KYC provider is used. |
| [GroupClear](imtconkyc_groupclear.md "GroupClear") | Clear the list of groups for which the KYC provider is used. |
| [GroupShift](imtconkyc_groupshift.md "GroupShift") | Shift a group in the KYC provider settings. |
| [GroupTotal](imtconkyc_grouptotal.md "GroupTotal") | Get the number of groups specified in the KYC provider settings. |
| [GroupNext](imtconkyc_groupnext.md "GroupNext") | Get the group for which the KYC provider is used by its index in the list. |

The IMTConKYC class contains the following enumerations:
| Enumeration | Description |
| --- | --- |
| --- | --- |
| [EnFlags](imtconkyc_enum.htm#enflags) | KYC provider configuration flags. |
| [EnProviderType](imtconkyc_enum.htm#enprovidertype) | Supported providers. |