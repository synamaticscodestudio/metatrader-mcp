# PriceCost (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscription ](imtconsubscription.md "IMTConSubscription")/ PriceCost | [](imtconsubscription_pricepro.md "PricePro") [](imtconsubscription_pricecurrency.md "PriceCurrency") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::PriceCost
Get a subscription cost.
C++
double IMTConSubscription::PriceCost() const  
---  
.NET (Gateway/Manager API)
double CIMTConSubscription.PriceCost()  
---  
Return Value
Subscription cost.
Note
The currency in which the price is specified, is determined by the [IMTConSubscription::PriceCurrency](imtconsubscription_pricecurrency.md "PriceCurrency") property.
IMTConSubscription::PriceCost
Set a subscription cost.
C++
MTAPIRES IMTConSubscription::PriceCost( const double price // Price )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscription.PriceCost( double price // Price )  
---  
Parameters
price
[in] Subscription cost.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.
Note
The currency in which the price is specified, is determined by the [IMTConSubscription::PriceCurrency](imtconsubscription_pricecurrency.md "PriceCurrency") property.