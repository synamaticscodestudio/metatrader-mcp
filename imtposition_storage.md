# Storage (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPosition ](imtposition.md "IMTPosition")/ Storage | [](imtposition_profit.md "Profit") [](imtposition_rateprofit.md "RateProfit") |
| --- | --- | --- |
| --- | --- |

IMTPosition::Storage
Get the swap size for a position.
C++
double IMTPosition::Storage() const  
---  
.NET (Gateway/Manager API)
double CIMTPosition.Storage()  
---  
Return Value
The swap value of a position in the account deposit currency.
IMTPosition::Storage
Set the swap size for a position.
C++
MTAPIRES IMTPosition::Storage( const double storage // Swap )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTPosition.Storage( double storage // Swap )  
---  
Parameters
storage
[in] The swap value of a position in the account deposit currency.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The swap of each open position is accumulated in the IMTPosition::Storage field. The total amount of swaps of all positions on the account is stored in [IMTAccount:Storage](imtaccount_storage.md "Storage"). The swap is reflected on the balance after position closure. In this case, the value of IMTPosition::Storage is reset, and the appropriate amount of fixed swap is deducted from the value of IMTAccount::Storage. If only a part of the position is closed, the proportionate share of the swap is reflected on the balance.