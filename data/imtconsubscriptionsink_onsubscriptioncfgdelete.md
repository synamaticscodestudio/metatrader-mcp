# OnSubscriptionCfgDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscriptionSink ](imtconsubscriptionsink.md "IMTConSubscriptionSink")/ OnSubscriptionCfgDelete | [](imtconsubscriptionsink_onsubscriptioncfgupdate.md "OnSubscriptionCfgUpdate") [](imtconsubscriptionsink_onsubscriptioncfgsync.md "OnSubscriptionCfgSync") |
| --- | --- | --- |
| --- | --- |

IMTConSubscriptionSink:OnSubscriptionCfgDelete
Event handler for deleting subscription configuration.
C++
virtual void IMTConSubscriptionSink::OnSubscriptionCfgDelete( const IMTConSubscription* config // A pointer to the configuration object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConSubscriptionSink.OnSubscriptionCfgDelete( CIMTConSubscription config // Configuration object )  
---  
Parameters
config
A pointer to the deleted [IMTConSubscription](imtconsubscription.md "IMTConSubscription") configuration object.
Note
This method is called by the API to notify of deletion of a subscription configuration.