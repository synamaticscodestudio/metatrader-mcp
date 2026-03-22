# MarginLevel (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts") / [ IMTAccount ](imtaccount.md "IMTAccount")/ MarginLevel | [](imtaccount_marginfree.md "MarginFree") [](imtaccount_marginleverage.md "MarginLeverage") |
| --- | --- | --- |
| --- | --- |

IMTAccount::MarginLevel
Get the margin level as a percentage.
C++
double IMTAccount::MarginLevel() const  
---  
.NET (Gateway/Manager API)
double CIMTAccount.MarginLevel()  
---  
Return Value
The margin level, calculated as a percentage of the account equity ([IMTAccount::Equity](imtaccount_equity.md "Equity")) to the amount of margin ([IMTAccount::Margin](imtaccount_margin.md "Margin")).
IMTAccount::MarginLevel
Set the margin level as a percentage.
C++
MTAPIRES IMTAccount::MarginLevel( const double margin_level // Margin level )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAccount.MarginLevel( double margin_level // Margin level )  
---  
Parameters
margin_level
[in] The margin level as a percentage.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.