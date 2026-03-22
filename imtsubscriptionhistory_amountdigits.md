# AmountDigits (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionHistory ](imtsubscriptionhistory.md "IMTSubscriptionHistory")/ AmountDigits | [](imtsubscriptionhistory_amount.md "Amount") [](imtsubscriptionhistory_amountdeal.md "AmountDeal") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionHistory::AmountDigits
Get the number of decimal places in the subscription payment amount.
C++
UINT IMTSubscriptionHistory::AmountDigits() const  
---  
.NET (Gateway/Manager API)
uint CIMTSubscriptionHistory.AmountDigits()  
---  
Return Value
The number of decimal places in the subscription payment amount.
Note
The payment amount is determined by the [IMTSubscriptionHistory::Amount](imtsubscriptionhistory_amount.md "Amount") property.
IMTSubscriptionHistory::AmountDigits
Set the number of decimal places in the subscription payment amount.
C++
MTAPIRES IMTSubscriptionHistory::AmountDigits( UINT digits // The number of decimal places )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSubscriptionHistory.AmountDigits( uint digits // The number of decimal places )  
---  
Parameters
digits
[in] The number of decimal places in the subscription payment amount.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.
Note
The payment amount is determined by the [IMTSubscriptionHistory::Amount](imtsubscriptionhistory_amount.md "Amount") property.