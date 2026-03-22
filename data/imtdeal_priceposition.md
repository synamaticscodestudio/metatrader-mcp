# PricePosition (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ PricePosition | [](imtdeal_profitraw.md "ProfitRaw") [](imtdeal_tickvalue.md "TickValue") |
| --- | --- | --- |
| --- | --- |

IMTDeal::PricePosition
Gets the price of the position that was closed by this deal.
C++
double IMTDeal::PricePosition() const  
---  
.NET (Gateway/Manager API)
double CIMTDeal.PricePosition()  
---  
Python
MTDeal.PricePosition  
---  
Return Value
The price of the position that was closed by this deal.
Note
The value can be obtained only for the deals of type [IMTDeal::ENTRY_OUT](imtdeal_enum.htm#endealentry) and [IMTDeal::ENTRY_INOUT](imtdeal_enum.htm#endealentry).
IMTDeal::PricePosition
Sets the price of the position closed by the deal.
C++
MTAPIRES IMTDeal::PricePosition( const double price // Position price )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.PricePosition( double price // Position price )  
---  
Python
MTDeal.PricePosition  
---  
Parameters
price
[in] The price of the position closed by the deal.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The value can be set only for the deals of type [IMTDeal::ENTRY_OUT](imtdeal_enum.htm#endealentry) and [IMTDeal::ENTRY_INOUT](imtdeal_enum.htm#endealentry).