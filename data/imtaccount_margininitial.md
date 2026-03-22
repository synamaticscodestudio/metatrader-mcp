# MarginInitial (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts") / [ IMTAccount ](imtaccount.md "IMTAccount")/ MarginInitial | [](imtaccount_marginleverage.md "MarginLeverage") [](imtaccount_marginmaintenance.md "MarginMaintenance") |
| --- | --- | --- |
| --- | --- |

IMTAccount::MarginInitial
Get the current size of the initial margin of positions on a trading account.
C++
double IMTAccount::MarginInitial() const  
---  
.NET (Gateway/Manager API)
double CIMTAccount.MarginInitial()  
---  
Return Value
The current size of the initial margin of positions on a trading account.
IMTAccount::MarginInitial
Set the current size of the initial margin of positions on a trading account.
C++
MTAPIRES IMTAccount::MarginInitial( const double margin // Initial margin )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAccount.MarginInitial( double margin // Initial margin )  
---  
Parameters
margin
[in] The current size of the initial margin of positions on a trading account.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.