# MarginMaintenance (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts") / [ IMTAccount ](imtaccount.md "IMTAccount")/ MarginMaintenance | [](imtaccount_margininitial.md "MarginInitial") [](imtaccount_profit.md "Profit") |
| --- | --- | --- |
| --- | --- |

IMTAccount::MarginMaintenance
Get the current size of the maintenance margin of positions on a trading account.
C++
double IMTAccount::MarginMaintenance() const  
---  
.NET (Gateway/Manager API)
double CIMTAccount.MarginMaintenance()  
---  
Return Value
The current size of the maintenance margin of positions on a trading account.
IMTAccount::MarginMaintenance
Set the current size of the maintenance margin of positions on a trading account.
C++
MTAPIRES IMTAccount::MarginMaintenance( const double margin // Maintenance margin )  
---  
.NET (Gateway/Manager API)s
MTRetCode CIMTAccount.MarginMaintenance( double margin // Maintenance margin )  
---  
Parameters
margin
[in] The current size of the maintenance margin of positions on a trading account.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.