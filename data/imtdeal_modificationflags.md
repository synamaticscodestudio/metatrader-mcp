# ModificationFlags (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ ModificationFlags | [](imtdeal_marketlast.md "MarketLast") [](imtdealarray.md "IMTDealArray") |
| --- | --- | --- |
| --- | --- |

IMTDeal::ModificationFlags
Gets deal modification flags. The flags allow you to keep track of whether a deal has been modified manually by the administrator, manager or API.
C++
UINT IMTDeal::ModificationFlags() const  
---  
.NET (Gateway/Manager API)
uint CIMTDeal.ModificationFlags()  
---  
Python
MTDeal.ModificationFlags  
---  
Return Value
A value of the [IMTDeal::EnTradeModifyFlags](imtdeal_enum.htm#entrademodifyflags) enumeration.
Note
Deals that close a position or part of it inherit its modification flags. After closing, no separate entry about the position remains in the database. To prevent the information about modification from being lost, flags are copied to the deal that closes his position. At the same time, the additional EnTradeModifyFlags::MODIFY_FLAGS_POSITION modification flag is set for the deal 
When inheriting, the deal's flags are also preserved and they are added to the position flags..