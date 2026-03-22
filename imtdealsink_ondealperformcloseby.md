# OnDealPerformCloseBy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDealSink ](imtdealsink.md "IMTDealSink")/ OnDealPerformCloseBy | [](imtdealsink_ondealperform.md "OnDealPerform") [](trading_position.md "Positions") |
| --- | --- | --- |
| --- | --- |

IMTDealSink::OnDealPerformCloseBy
A handler of the event related to the execution of a Close By deal, created using the [IMTServerAPI:DealPerformCloseBy](imtserverapi_dealperformcloseby.md "DealPerformCloseBy") function.
C++
virtual void IMTDealSink::OnDealPerformCloseBy( const IMTDeal* deal // Pointer to the deal object const IMTDeal* deal_by // Pointer to the deal object IMTAccount* account // Pointer to the account trade state IMTPosition* position // Pointer to the resulting position )  
---  
.NET (Gateway/Manager API)
virtual void CIMTDealSink.OnDealPerformCloseBy( CIMTDeal deal // Pointer to the deal object CIMTDeal deal_by // Pointer to the deal object CIMTAccount account // Pointer to the account trade state CIMTPosition position // Pointer to the resulting position )  
---  
Parameters
deal
[in] A pointer to the object of the [deal](imtdeal.md "IMTDeal") which has been executed to close the source position.
deal_by
[in] A pointer to the object of the [deal](imtdeal.md "IMTDeal") which has been executed to close the opposite position.
account
[in] A pointer to the object of the [account trading state](imtaccount.md "IMTAccount") after deal execution.
position
[in] A pointer to the object of the resulting [position](imtposition.md "IMTPosition") after deal execution.
Note
The handler is only called for [IMTDeal::ENTRY_OUT_BY](imtdeal_enum.htm#endealentry) type deals, in addition to [IMTDealSink::OnDealPerform](imtdealsink_ondealperform.md "OnDealPerform").
Calling the handler means that the deal has already been executed and the result of its execution is already reflected in the trading account state and position states.