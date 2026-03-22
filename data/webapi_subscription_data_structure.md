# Data Structure (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Subscriptions ](webapi_subscription.md "Subscriptions")/ Data Structure | [](webapi_subscription.md "Subscriptions") [](webapi_subscription_join.md "Subscribe") |
| --- | --- | --- |
| --- | --- |

Data Structure
Subscription information is sent in JSON format in response to the following requests:
  * [/api/subscription/join](webapi_subscription_join.md "Subscribe")
  * [/api/subscription/cancel](webapi_subscription_cancel.md "Unsubscribe")
  * [/api/subscription/get](webapi_subscription_get.md "Get Subscriptions")
  * [/api/subscription/history/get](webapi_subscription_history_get.md "Get from History")

Active subscription
Active subscription information includes the following parameters:
| Parameter | Type | Description |
| --- | --- | --- |
| --- | --- | --- |
| ID | Integer | Subscription ID |
| Timestamp | Integer | Used by MetaTrader 5 servers for internal purposes. If the Timestamp of a record has changed, it means that the record has changed. |
| Login | Integer | The login of the client to whom the subscription belongs. |
| Subscription | Integer | Subscription configuration ID. |
| Status | Integer | Subscription status. The status is passed by the [EnStatus](imtsubscription_enum.htm#enstatus) enumeration. |
| Flags | Integer | Additional subscription properties. Additional settings are passed by the [EnFlags](imtsubscription_enum.htm#enflags) enumeration. |
| TimeSubscribe | Integer | Subscription start time in seconds since 01.01.1970. |
| TimeRenewal | Integer | The last subscription renewal time in seconds since 01.01.1970. |
| TimeExpire | Integer | Subscription expiration time in seconds since 01.01.1970. |

Subscription action (history)
Information about an entry in the subscription history includes the following parameters:
| Parameter | Type | Description |
| --- | --- | --- |
| --- | --- | --- |
| ID | Integer | A unique identifier of a subscription action. |
| Timestamp | Integer | Used by MetaTrader 5 servers for internal purposes. If the Timestamp of a record has changed, it means that the record has changed. |
| Login | Integer | The login of the client to whom the subscription belongs. |
| Subscription | Integer | Subscription configuration ID. |
| Record | Integer | The identifier of the subscription with which the action is performed. |
| Action | Integer | The type of performed subscription action. The type is passed by the [EnAction](imtsubscriptionhistory_enum.htm#enaction) enumeration. |
| TimeCreated | Integer | Subscription action time in seconds since 01.01.1970. |
| Amount | Float | The amount paid for the subscription. |
| AmountDeal | Integer | The ticket of the deal by which the subscription payment was conducted. |