# OnDealDelete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDealSink ](imtdealsink.md "IMTDealSink")/ OnDealDelete | [](imtdealsink_ondealupdate.md "OnDealUpdate") [](imtdealsink_ondealclean.md "OnDealClean") |
| --- | --- | --- |
| --- | --- |

IMTDealSink::OnDealDelete
A handler of the event of deal removal.
C++
virtual void IMTDealSink::OnDealDelete( const IMTDeal* deal // A pointer to the deal object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTDealSink.OnDealDelete( CIMTDeal deal // Deal object )  
---  
Parameters
deal
[in] A pointer to the object of the deleted deal.
Note
This method is called by the API to notify that a deal has been deleted.