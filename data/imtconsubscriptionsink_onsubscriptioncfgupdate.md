# OnSubscriptionCfgUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscriptionSink ](imtconsubscriptionsink.md "IMTConSubscriptionSink")/ OnSubscriptionCfgUpdate | [](imtconsubscriptionsink_onsubscriptioncfgadd.md "OnAutomationAdd") [](imtconsubscriptionsink_onsubscriptioncfgdelete.md "OnSubscriptionCfgDelete") |
| --- | --- | --- |
| --- | --- |

IMTConSubscriptionSink::OnSubscriptionCfgUpdate
Event handler for updating subscription configuration.
C++
virtual void IMTConSubscriptionSink::OnSubscriptionCfgUpdate( const IMTConSubscription* config // A pointer to the configuration object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConSubscriptionSink.OnSubscriptionCfgUpdate( CIMTConSubscription config // Configuration object )  
---  
Parameters
config
[in] A pointer to the updated [IMTConSubscription](imtconsubscription.md "IMTConSubscription") configuration object.
Note
The API calls this method to notify of an update of a subscription configuration.