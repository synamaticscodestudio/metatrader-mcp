# Flags (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ Flags | [](imtdeal_ticksize.md "TickSize") [](imtdeal_reason.md "Reason") |
| --- | --- | --- |
| --- | --- |

IMTDeal::Flags
Get the common flags of a deal.
C++
UINT64 IMTDeal::Flags() const  
---  
.NET (Gateway/Manager API)
ulong CIMTDeal.Flags()  
---  
Python
MTDeal.Flags  
---  
Return Value
Common flags of a deal.
Note
This method is reserved for future use.
IMTDeal::Flags
Set the common flags of a deal.
C++
MTAPIRES IMTDeal::Flags( const UINT64 flags // Common flags of a deal )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.Flags( ulong flags // Common flags of a deal )  
---  
Python
MTDeal.Flags  
---  
Parameters
flags
[in] Common flags of a deal.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method is reserved for future use.