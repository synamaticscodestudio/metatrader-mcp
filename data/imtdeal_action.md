# Action (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ Action | [](imtdeal_order.md "Order") [](imtdeal_entry.md "Entry") |
| --- | --- | --- |
| --- | --- |

IMTDeal::Action
Get the type of action performed with a deal.
C++
UINT IMTDeal::Action() const  
---  
.NET (Gateway/Manager API)
uint CIMTDeal.Action()  
---  
Python
MTDeal.Action  
---  
Return Value
A value of the [IMTDeal::EnDealAction](imtdeal_enum.htm#endealaction) enumeration.
IMTDeal::Action
Set the type of action performed with a deal.
C++
MTAPIRES IMTDeal::Action( const UINT action // Type of action )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.Action( uint action // Type of action )  
---  
Python
MTDeal.Action  
---  
Parameters
action
[in] Tupe of action performed with a deal. The [IMTDeal::EnDealAction](imtdeal_enum.htm#endealaction) enumeration is used to pass the action..
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.