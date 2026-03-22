# InterestRate (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ InterestRate | [](imtdaily_credit.md "Credit") [](imtdaily_commissiondaily.md "CommissionDaily") |
| --- | --- | --- |
| --- | --- |

IMTDaily::InterestRate
Get the amount of accumulated annual interest.
C++
double IMTDaily::InterestRate() const  
---  
.NET (Gateway/Manager API)
double CIMTDaily.InterestRate()  
---  
Return Value
The amount of accumulated annual interest.
Note
Annual interest is calculated every day in accordance with the group settings ([IMTConGroup::TradeInterestrate](imtcongroup_tradeinterestrate.md "TradeInterestrate")) and is accumulated in a separate account field. At the end of each month, the accumulated amount is credited to the account balance using an [IMTDeal::DEAL_INTERESTRATE](imtdeal_enum.htm#endealaction) operation, and the InterestRate value is reset to zero.
IMTDaily::InterestRate
Set the amount of accumulated annual interest.
C++
MTAPIRES IMTDaily::InterestRate( const double credit // Amount )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.InterestRate( double credit // Amount )  
---  
Parameters
credit
[in] The amount of accumulated annual interest.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.