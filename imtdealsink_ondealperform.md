# OnDealPerform (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDealSink ](imtdealsink.md "IMTDealSink")/ OnDealPerform | [](imtdealsink_ondealsync.md "OnDealSync") [](imtdealsink_ondealperformcloseby.md "OnDealPerformCloseBy") |
| --- | --- | --- |
| --- | --- |

IMTDealSink::OnDealPerform
A handler of the event of execution of a deal, created using [IMTServerAPI:DealPerform*](imtserverapi_dealperform.md "DealPerform"), [IMTAdminAPI:DealPerform*](imtadminapi_dealperform.md "DealPerform") or [IMTManagerAPI::DealPerform*](imtmanagerapi_dealperform.md "DealPerform") function.
C++
virtual void IMTDealSink::OnDealPerform( const IMTDeal* deal // A pointer to the deal object IMTAccount* account // A pointer to the trading state of an accounts IMTPosition* position // A pointer to the final position )  
---  
.NET (Gateway/Manager API)
virtual void CIMTDealSink.OnDealPerform( CIMTDeal deal // A pointer to the deal object CIMTAccount account // A pointer to the trading state of an accounts CIMTPosition position // A pointer to the final position )  
---  
Parameters
deal
[in] A pointer to the object of the executed [deal](imtdeal.md "IMTDeal").
account
[in] A pointer to the object of the [account trading state](imtaccount.md "IMTAccount") after the execution of the deal.
position
[in] A pointer to the object of the resulting [position](imtposition.md "IMTPosition") after the execution of the deal. Due to architecture specifics, the position is transmitted with zero values in PriceOpen, TimeCreate and TimeCreateMsc fields.
Note
The call of the handler means that the deal has been executed and the result of its execution is already reflected on the trading account balance and the position state.
For balance operations, a pointer to the position in the 'position' parameter is equal to NULL. To deals that close positions, the position object with a zero volume is passed in the appropriate parameter.