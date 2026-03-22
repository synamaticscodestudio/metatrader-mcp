# TickValue (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ TickValue | [](imtdeal_priceposition.md "PricePosition") [](imtdeal_ticksize.md "TickSize") |
| --- | --- | --- |
| --- | --- |

IMTDeal::TickValue
Get the tick price for a deal.
C++
double IMTDeal::TickValue() const  
---  
.NET (Gateway/Manager API)
double CIMTDeal.TickValue()  
---  
Python
MTDeal.TickValue  
---  
Return Value
The tick price for a deal.
IMTDeal::TickValue
Set the tick price for a deal.
C++
MTAPIRES IMTDeal::TickValue( const double value // Tick price )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.TickValue( double value // Tick price )  
---  
Python
MTDeal.TickValue  
---  
Parameters
value
[in] The tick price for a deal.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.