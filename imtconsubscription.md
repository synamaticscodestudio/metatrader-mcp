# IMTConSubscription (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions")/ IMTConSubscription | [](config_subscription.md "Subscriptions") [](imtconsubscription_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription
The IMTConSubscription class contains method for getting and editing [subscription settings](https://support.metaquotes.net/en/docs/mt5/platform/administration/subscriptions):
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtconsubscription_release.md "Release") | Delete the current object. |
| [Assign](imtconsubscription_assign.md "Assign") | Assigns a passed object to the current one. |
| [Clear](imtconsubscription_clear.md "Clear") | Clear an object. |
| [ID](imtconsubscription_id.md "ID") | Get a unique configuration identifier. |
| [ParentID](imtconsubscription_parentid.md "ParentID") | Get the ID of the subdirectory in which the configuration is located. |
| [DependsID](imtconsubscription_dependsid.md "DependsID") | Get and set the subscription which the current subscription depends on. |
| [Name](imtconsubscription_name.md "Name") | Get and set a subscription name. |
| [Type](imtconsubscription_type.md "Type") | Get and set a subscription configuration type. |
| [Image](imtconsubscription_image.md "Image") | Get and set a subscription logo. |
| [Description](imtconsubscription_description.md "Description") | Get and set a subscription description. |
| [URLDescription](imtconsubscription_urldescription.md "URLDescription") | Get and set a link to an additional subscription description. |
| [URLAgreement](imtconsubscription_urlagreement.md "URLAgreement") | Get and set a link to a subscription agreement. |
| [ControlMode](imtconsubscription_controlmode.md "ControlMode") | Get and set a subscription management mode in client terminals (allowed actions). |
| [PeriodMode](imtconsubscription_periodmode.md "PeriodMode") | Get and set a subscription period. |
| [PeriodCustom](imtconsubscription_periodcustom.md "PeriodCustom") | Get and set a custom subscription period. |
| [PeriodFreeMode](imtconsubscription_periodfreemode.md "PeriodFreeMode") | Get and set a trial (free) subscription period. |
| [PeriodFreeCustom](imtconsubscription_periodfreecustom.md "PeriodFreeCustom") | Get and set a custom value for a trial (free) subscription period. |
| [Flags](imtconsubscription_flags.md "Flags") | Get and set additional subscription settings. |
| [Price](imtconsubscription_price.md "Price") | Get and set a subscription price for non-professional traders. |
| [PricePro](imtconsubscription_pricepro.md "PricePro") | Get and set a subscription price for professional traders. |
| [PriceCost](imtconsubscription_pricecost.md "PriceCost") | Get and set a subscription cost. |
| [PriceCurrency](imtconsubscription_pricecurrency.md "PriceCurrency") | Get and set the currency in which the subscription price is specified. |
| [CountryAdd](imtconsubscription_countryadd.md "CountryAdd") | Add a country for which the subscription will be available. |
| [CountryUpdate](imtconsubscription_countryupdate.md "CountryUpdate") | Change a country for which the subscription is available. |
| [CountryDelete](imtconsubscription_countrydelete.md "CountryDelete") | Delete a country for which the subscription is available. |
| [CountryClear](imtconsubscription_countryclear.md "CountryClear") | Clear the list of countries for which the subscription is available. |
| [CountryShift](imtconsubscription_countryshift.md "CountryShift") | Shift a country for which the subscription is available. |
| [CountryTotal](imtconsubscription_countrytotal.md "CountryTotal") | Get the number of countries for which the subscription is available. |
| [CountryNext](imtconsubscription_countrynext.md "CountryNext") | Get a country, for which the subscription is available, by index. |
| [GroupAdd](imtconsubscription_groupadd.md "GroupAdd") | Add a group for which the subscription will be available. |
| [GroupUpdate](imtconsubscription_groupupdate.md "GroupUpdate") | Change a group for which the subscription is available. |
| [GroupDelete](imtconsubscription_groupdelete.md "GroupDelete") | Delete a group for which the subscription is available. |
| [GroupClear](imtconsubscription_groupclear.md "GroupClear") | Clear the list of groups for which the subscription is available. |
| [GroupShift](imtconsubscription_groupshift.md "GroupShift") | Shift a country for which the subscription is available. |
| [GroupTotal](imtconsubscription_grouptotal.md "GroupTotal") | Get the number of groups for which the subscription is available. |
| [GroupNext](imtconsubscription_groupnext.md "GroupNext") | Get a group, for which the subscription is available, by index. |
| [SymbolAdd](imtconsubscription_symboladd.md "SymbolAdd") | Add a trading instrument to the list of symbols available by subscription. |
| [SymbolUpdate](imtconsubscription_symbolupdate.md "SymbolUpdate") | Update a trading instrument in the list of symbols available by subscription. |
| [SymbolDelete](imtconsubscription_symboldelete.md "SymbolDelete") | Delete a trading instrument from the list of symbols available by subscription. |
| [SymbolClear](imtconsubscription_symbolclear.md "SymbolClear") | Clear the list of trading instruments available by subscription. |
| [SymbolShift](imtconsubscription_symbolshift.md "SymbolShift") | Shift a trading instrument in the list in subscription settings. |
| [SymbolTotal](imtconsubscription_symboltotal.md "SymbolTotal") | Get the number of trading instruments available by subscription. |
| [SymbolNext](imtconsubscription_symbolnext.md "SymbolNext") | Get a trading instrument available by subscription, by index. |
| [NewsAdd](imtconsubscription_newsadd.md "NewsAdd") | Add a news category to the news list available by subscription. |
| [NewsUpdate](imtconsubscription_newsupdate.md "NewsUpdate") | Edit a news category in the news list available by subscription. |
| [NewsDelete](imtconsubscription_newsdelete.md "NewsDelete") | Delete a news category from the news list available by subscription. |
| [NewsClear](imtconsubscription_newsclear.md "NewsClear") | Clear the list of news categories available by subscription. |
| [NewsShift](imtconsubscription_newsshift.md "NewsShift") | Shift a news category in the list in subscription settings. |
| [NewsTotal](imtconsubscription_newstotal.md "NewsTotal") | Get the number of news categories available by subscription. |
| [NewsNext](imtconsubscription_newsnext.md "NewsNext") | Get a news category available by subscription, by index. |

The IMTConSubscription class contains the following enumerations:
| Enumeration | Description |
| --- | --- |
| --- | --- |
| [EnLevel](imtconsubscription_enum.htm#entype) | Types of subscription objects. |
| [EnPeriod](imtconsubscription_enum.htm#enperiod) | Subscription periods. |
| [EnFreePeriod](imtconsubscription_enum.htm#enfreeperiod) | Subscription trial periods. |
| [EnFlags](imtconsubscription_enum.htm#enflags) | Flags for additional subscription properties. |
| [EnControlMode](imtconsubscription_enum.htm#encontrolmode) | Subscription actions that can be performed in client terminals. |
| [EnImageType](imtconsubscription_enum.htm#enimagetype) | Logos that can be used for subscriptions. |