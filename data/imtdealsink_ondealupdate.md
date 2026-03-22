# OnDealUpdate (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDealSink ](imtdealsink.md "IMTDealSink")/ OnDealUpdate | [](imtdealsink_ondealadd.md "OnDealAdd") [](imtdealsink_ondealdelete.md "OnDealDelete") |
| --- | --- | --- |
| --- | --- |

IMTDealSink::OnDealUpdate
A handler of the event of updating a deal.
C++
virtual void IMTDealSink::OnDealUpdate( const IMTDeal* deal // A pointer to the deal object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTDealSink.OnDealUpdate( CIMTDeal deal // Deal object )  
---  
Parameters
deal
[in] A pointer to the object of the updated deal.
Note
This method is called by the API to notify that a deal has been modified.