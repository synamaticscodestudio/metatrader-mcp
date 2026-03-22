# PricePro (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscription ](imtconsubscription.md "IMTConSubscription")/ PricePro | [](imtconsubscription_price.md "Price") [](imtconsubscription_pricecost.md "PriceCost") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::PricePro
Get a subscription price for professional traders.
C++
double IMTConSubscription::PricePro() const  
---  
.NET (Gateway/Manager API)
double CIMTConSubscription.PricePro()  
---  
Return Value
Subscription price.
Note
Professional traders include legal entities, banks, brokers, etc.
The currency in which the price is specified, is determined by the [IMTConSubscription::PriceCurrency](imtconsubscription_pricecurrency.md "PriceCurrency") property.
IMTConSubscription::PricePro
Set a subscription price for professional traders.
C++
MTAPIRES IMTConSubscription::PricePro( const double price // Price )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscription.PricePro( double price // Price )  
---  
Parameters
price
[in] Subscription price.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.
Note
Professional traders include legal entities, banks, brokers, etc.
The currency in which the price is specified, is determined by the [IMTConSubscription::PriceCurrency](imtconsubscription_pricecurrency.md "PriceCurrency") property.