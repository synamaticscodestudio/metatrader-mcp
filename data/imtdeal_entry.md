# Entry (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ Entry | [](imtdeal_action.md "Action") [](imtdeal_digits.md "Digits") |
| --- | --- | --- |
| --- | --- |

IMTDeal::Entry
Get the direction of a deal.
C++
UINT IMTDeal::Entry() const  
---  
.NET (Gateway/Manager API)
uint CIMTDeal.Entry()  
---  
Python
MTDeal.Entry  
---  
Return Value
A value of the [IMTDeal::EnDealEntry](imtdeal_enum.htm#endealentry) enumeration.
IMTDeal::Entry
Set the direction of a deal.
C++
MTAPIRES IMTDeal::Entry( const UINT entry // Direction of a deal )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.Entry( uint entry // Direction of a deal )  
---  
Python
MTDeal.Entry  
---  
Parameters
entry
[in] The direction of a deal. The [IMTDeal::EnDealEntry](imtdeal_enum.htm#endealentry) enumeration is used to pass the direction..
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.