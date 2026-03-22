# TickSize (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ TickSize | [](imtdeal_tickvalue.md "TickValue") [](imtdeal_flags.md "Flags") |
| --- | --- | --- |
| --- | --- |

IMTDeal::TickSize
Get the tick size for a deal.
C++
double IMTDeal::TickSize() const  
---  
.NET (Gateway/Manager API)
double CIMTDeal.TickSize()  
---  
Python
MTDeal.TickSize  
---  
Return Value
The tick size for a deal.
IMTDeal::TickSize
Set the tick size for a deal.
C++
MTAPIRES IMTDeal::TickSize( const double size // Tick size )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.TickSize( double size // Tick size )  
---  
Python
MTDeal.TickSize  
---  
Parameters
value
[in] The tick size for a deal.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.