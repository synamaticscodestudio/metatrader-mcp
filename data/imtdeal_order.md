# Order (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ Order | [](imtdeal_dealer.md "Dealer") [](imtdeal_action.md "Action") |
| --- | --- | --- |
| --- | --- |

IMTDeal::Order
Get the ticket of the order, as a result of which a deal was executed.
C++
UINT64 IMTDeal::Order() const  
---  
.NET (Gateway/Manager API)
ulong CIMTDeal.Order()  
---  
Python
MTDeal.Order  
---  
Return Value
The ticket of the order, as a result of which a deal was executed.
IMTDeal::Order
Sets the ticket of the order, as a result of which a deal was executed.
C++
MTAPIRES IMTDeal::Order( const UINT64 order // Order ticket )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.Order( ulong order // Order ticket )  
---  
Python
MTDeal.Order  
---  
Parameters
order
[in] The ticket of the order, as a result of which a deal was executed.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.