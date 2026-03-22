# OnAutomationAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscriptionSink ](imtconsubscriptionsink.md "IMTConSubscriptionSink")/ OnSubscriptionCfgAdd | [](imtconsubscriptionsink.md "IMTConSubscriptionSink") [](imtconsubscriptionsink_onsubscriptioncfgupdate.md "OnSubscriptionCfgUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConSubscriptionSink::OnSubscriptionCfgAdd
Event handler for adding a new subscription configuration.
C++
virtual void IMTConSubscriptionSink::OnSubscriptionCfgAdd( const IMTConSubscription* config // A pointer to the configuration object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConSubscriptionSink.OnSubscriptionCfgAdd( CIMTConSubscription config // Configuration object )  
---  
Parameters
config
[in] A pointer to the object of the added [IMTConSubscription](imtconsubscription.md "IMTConSubscription") configuration.
Note
The API calls this method to notify that a new subscription configuration has been added.