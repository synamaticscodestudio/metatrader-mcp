# IMTConMessenger (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers")/ IMTConMessenger | [](config_messenger.md "Messengers") [](imtconmessenger_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTConMessenger
The IMTConMessenger class contains methods for getting and updating messenger configurations:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtconmessenger_release.md "Release") | Delete the current object. |
| [Assign](imtconmessenger_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtconmessenger_clear.md "Clear") | Clear an object. |
| [Name](imtconmessenger_name.md "Name") | Get and set the messenger configuration name. |
| [Sender](imtconmessenger_sender.md "Sender") | Get and set the sender name in the messenger configuration. |
| [ProviderType](imtconmessenger_providertype.md "ProviderType") | Get and set the messaging service provider in the messenger configuration. |
| [ProviderAddress](imtconmessenger_provideraddress.md "ProviderAddress") | Get and set the messaging provider server address in the messenger configuration. |
| [ProviderLogin](imtconmessenger_providerlogin.md "ProviderLogin") | Get and set the login of the account which is used for sending messages via the messenger. |
| [ProviderPassword](imtconmessenger_providerpassword.md "ProviderPassword") | Get and set the password of the account which is used for sending messages via the messenger. |
| [ProviderToken](imtconmessenger_providertoken.md "ProviderToken") | Get and set the authentication token, which is used for sending messages via the messenger. |
| [ProviderSubId](imtconmessenger_providersubod.md "ProviderSubId") | Get and set the sender identifier, which is used for sending messages via the messenger. |
| [ProviderCurrency](imtconmessenger_providercurrency.md "ProviderCurrency") | Get and set the currency which is used for service provider pricing. |
| [ProviderCurrencyRate](imtconmessenger_providercurrencyrate.md "ProviderCurrencyRate") | Get and set the rate at which the currency of service provider pricing is converted to US dollars. |
| [Flags](imtconmessenger_flags.md "Flags") | Get and set additional messenger settings. |
| [MessageTemplate](imtconmessenger_messagetemplate.md "MessageTemplate") | Get and set a basic template for sending messages via this provider. |
| [CountryAdd](imtconmessenger_countryadd.md "CountryAdd") | Add a country for which the messenger will be used. |
| [CountryUpdate](imtconmessenger_countryupdate.md "CountryUpdate") | Change the country for which the messenger is used. |
| [CountryDelete](imtconmessenger_countrydelete.md "CountryDelete") | Delete the country for which the messenger is used. |
| [CountryClear](imtconmessenger_countryclear.md "CountryClear") | Clear the list of countries for which the messenger is used. |
| [CountryShift](imtconmessenger_countryshift.md "CountryShift") | Shift a country in the messenger settings. |
| [CountryTotal](imtconmessenger_countrytotal.md "CountryTotal") | Get the number of countries specified in the messenger settings. |
| [CountryNext](imtconmessenger_countrynext.md "CountryNext") | Get the country for which the messenger is used, by its index in the list. |
| [GroupAdd](imtconmessenger_groupadd.md "GroupAdd") | Add a group of accounts for which the messenger will be used. |
| [GroupUpdate](imtconmessenger_groupupdate.md "GroupUpdate") | Change the group of accounts for which the messenger is used. |
| [GroupDelete](imtconmessenger_groupdelete.md "GroupDelete") | Delete the group of accounts for which the messenger is used. |
| [GroupClear](imtconmessenger_groupclear.md "GroupClear") | Clear the list of groups for which the messenger is used. |
| [GroupShift](imtconmessenger_groupshift.md "GroupShift") | Shift a group in the messenger settings. |
| [GroupTotal](imtconmessenger_grouptotal.md "GroupTotal") | Get the number of groups specified in the messenger settings. |
| [GroupNext](imtconmessenger_groupnext.md "GroupNext") | Get the group for which the messenger is used, by its index in the list. |
| [TemplateAdd](imtconmessenger_templateadd.md "TemplateAdd") | Add a message template that the messenger will use. |
| [TemplateUpdate](imtconmessenger_templateupdate.md "TemplateUpdate") | Edit the message template used by the messenger. |
| [TemplateDelete](imtconmessenger_templatedelete.md "TemplateDelete") | Delete the message template used by the messenger. |
| [TemplateClear](imtconmessenger_templateclear.md "TemplateClear") | Clear the list of message templates used by the messenger. |
| [TemplateShift](imtconmessenger_templateshift.md "TemplateShift") | Move the message template in the messenger settings. |
| [TemplateTotal](imtconmessenger_templatetotal.md "TemplateTotal") | Get the number of message templates specified in the messenger settings. |
| [TemplateNext](imtconmessenger_templatenext.md "TemplateNext") | Get a message template used by the messenger by its index in the list. |

The IMTConMessenger class contains the following enumerations:
| Enumeration | Description |
| --- | --- |
| --- | --- |
| [EnFlags](imtconmessenger_enum.htm#enflags) | Messenger configuration flags. |
| [EnProviderType](imtconmessenger_enum.htm#enprovidertype) | Supported providers. |