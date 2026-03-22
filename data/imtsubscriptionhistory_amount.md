# Amount (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionHistory ](imtsubscriptionhistory.md "IMTSubscriptionHistory")/ Amount | [](imtsubscriptionhistory_time.md "Time") [](imtsubscriptionhistory_amountdigits.md "AmountDigits") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionHistory::Amount
Get the amount paid for the subscription.
C++
double IMTSubscriptionHistory::Amount() const  
---  
.NET (Gateway/Manager API)
double CIMTSubscriptionHistory.Amount()  
---  
Return Value
The amount paid for the subscription.
Note
The method is only meaningful for subscribing and renewal actions.
IMTSubscriptionHistory::Amount
Set the subscription payment amount.
C++
MTAPIRES IMTSubscriptionHistory::Amount( const double ammount // Price )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSubscriptionHistory.Amount( double ammount // Price )  
---  
Parameters
amount
[in] Subscription payment amount.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.
Note
The method is only meaningful for subscribing and renewal actions.