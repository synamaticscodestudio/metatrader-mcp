# OnSubscriptionCfgSync (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscriptionSink ](imtconsubscriptionsink.md "IMTConSubscriptionSink")/ OnSubscriptionCfgSync | [](imtconsubscriptionsink_onsubscriptioncfgdelete.md "OnSubscriptionCfgDelete") [](config_funds.md "Funds and ETF") |
| --- | --- | --- |
| --- | --- |

IMTConSubscriptionSink::OnSubscriptionCfgSync
Event handler for synchronizing subscription configuration.
C++
virtual void IMTConSubscriptionSink::OnSubscriptionCfgSync()  
---  
.NET (Gateway/Manager API)
virtual void CIMTConSubscriptionSink.OnSubscriptionCfgSync()  
---  
Note
The API calls this method to notify of synchronization of a subscription configuration.
Synchronization of configurations is carried out on access and history servers, trade and backup servers when connecting to the main server.