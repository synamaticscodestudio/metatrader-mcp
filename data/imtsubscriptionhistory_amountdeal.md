# AmountDeal (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionHistory ](imtsubscriptionhistory.md "IMTSubscriptionHistory")/ AmountDeal | [](imtsubscriptionhistory_amountdigits.md "AmountDigits") [](imtsubscriptionhistoryarray.md "IMTSubscriptionHistoryArray") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionHistory::AmountDeal
Get the ticket of the deal by which the subscription payment was conducted.
C++
UINT64 IMTSubscriptionHistory::AmountDeal() const  
---  
.NET (Gateway/Manager API)
ulong CIMTSubscriptionHistory.AmountDeal()  
---  
Return Value
Deal ticket ([IMTDeal::Deal](imtdeal_deal.md "Deal")).
IMTSubscriptionHistory::AmountDeal
Set the ticket of the deal by which the subscription payment will be made.
C++
MTAPIRES IMTSubscriptionHistory::AmountDeal( const UINT64 deal // Deal ticket )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSubscriptionHistory.AmountDeal( ulong deal // Deal ticket )  
---  
Parameters
deal
[in] Deal ticket ([IMTDeal::Deal](imtdeal_deal.md "Deal")).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.