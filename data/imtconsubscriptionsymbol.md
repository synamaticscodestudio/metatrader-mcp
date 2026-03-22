# IMTConSubscriptionSymbol (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions")/ IMTConSubscriptionSymbol | [](imtconsubscription_newsnext.md "NewsNext") [](imtconsubscriptionsymbol_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTConSubscriptionSymbol
The IMTConSubscriptionSymbol class provides methods for obtaining and changing [symbol settings](https://support.metaquotes.net/en/docs/mt5/platform/administration/subscriptions/subscriptions_symbol) in the subscription configuration:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtconsubscriptionsymbol_release.md "Release") | Delete the current object. |
| [Assign](imtconsubscriptionsymbol_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtconsubscriptionsymbol_clear.md "Clear") | Clear an object. |
| [Symbol](imtconsubscriptionsymbol_symbol.md "Symbol") | Get and set the name of a symbol data for which is provided by the subscription. |
| [Level](imtconsubscriptionsymbol_level.md "Level") | Get and set the type of price data available by subscription. |
| [TickHistory](imtconsubscriptionsymbol_tickhistory.md "TickHistory") | Get and set the depth of tick data available by subscription. |

The IMTConSubscriptionSymbol class contains the following enumerations:
| Enumeration | Description |
| --- | --- |
| --- | --- |
| [EnLevel](imtconsubscriptionsymbol_enum.htm#enlevel) | Types of price data available by subscription. |
| [EnTickHistory](imtconsubscriptionsymbol_enum.htm#entickhistory) | Periods (depth) for which tick data can be available by subscription. |