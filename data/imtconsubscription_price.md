# Price (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscription ](imtconsubscription.md "IMTConSubscription")/ Price | [](imtconsubscription_flags.md "Flags") [](imtconsubscription_pricepro.md "PricePro") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::Price
Get a subscription price for non-professional traders.
C++
double IMTConSubscription::Price() const  
---  
.NET (Gateway/Manager API)
double CIMTConSubscription.Price()  
---  
Return Value
Subscription price.
Note
The currency in which the price is specified, is determined by the [IMTConSubscription::PriceCurrency](imtconsubscription_pricecurrency.md "PriceCurrency") property.
IMTConSubscription::Price
Set a subscription price for non-professional traders.
C++
MTAPIRES IMTConSubscription::Price( const double price // Price )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscription.Price( double price // Price )  
---  
Parameters
price
[in] Subscription price.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.
Note
The currency in which the price is specified, is determined by the [IMTConSubscription::PriceCurrency](imtconsubscription_pricecurrency.md "PriceCurrency") property.