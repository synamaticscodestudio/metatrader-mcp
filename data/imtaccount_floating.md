# Floating (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts") / [ IMTAccount ](imtaccount.md "IMTAccount")/ Floating | [](imtaccount_commission.md "Commission") [](imtaccount_equity.md "Equity") |
| --- | --- | --- |
| --- | --- |

IMTAccount::Floating
Get the size of floating profit/loss of open positions on the account.
C++
double IMTAccount::Floating() const  
---  
.NET (Gateway/Manager API)
double CIMTAccount.Floating()  
---  
Return Value
The size of floating profit/loss of open positions on the account. The floating profit/loss is calculated as the sum of [IMTAccount::Profit](imtaccount_profit.md "Profit") and [IMTAccount::Storage](imtaccount_storage.md "Storage") of open positions on the account.
IMTAccount::Floating
Set the size of floating profit/loss of open positions on the account.
C++
MTAPIRES IMTAccount::Floating( const double floating // Floating profit )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAccount.Floating( double floating // Floating profit )  
---  
Parameters
floating
[in] The size of floating profit/loss of open positions on the account.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.