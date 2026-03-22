# ParentID (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscription ](imtconsubscription.md "IMTConSubscription")/ ParentID | [](imtconsubscription_id.md "ID") [](imtconsubscription_dependsid.md "DependsID") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::ParentID
Get the ID of the subdirectory in which the configuration is located.
C++
UINT64 IMTConSubscription::ParentID() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConSubscription.ParentID()  
---  
Return Value
The unique identifier for the directory.
Note
For convenience, subscriptions can be grouped by directories. The [IMTConSubscription](imtconsubscription.md "IMTConSubscription") configuration object can be either a description of the subscription or a description of a subdirectory of subscriptions. This can be determined by the [IMTConSubscription::TYPE_FOLDER](imtconsubscription_enum.htm#entype) property.