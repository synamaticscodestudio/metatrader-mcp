# SOEquity (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts") / [ IMTAccount ](imtaccount.md "IMTAccount")/ SOEquity | [](imtaccount_solevel.md "SOLevel") [](imtaccount_somargin.md "SOMargin") |
| --- | --- | --- |
| --- | --- |

IMTAccount::SOEquity
Get the account equity at the time of reaching the Stop Out level.
C++
double IMTAccount::SOEquity() const  
---  
.NET (Gateway/Manager API)
double CIMTAccount.SOEquity()  
---  
Return Value
The amount of funds ([IMTAccount::Equity](imtaccount_equity.md "Equity")) on the account at the time it reaches the Stop Out level.
IMTAccount::SOEquity
Set the account equity at the time of reaching the Stop Out level.
C++
MTAPIRES IMTAccount::SOEquity( const double equity // Equity )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAccount.SOEquity( double equity // Equity )  
---  
Parameters
equity
[in] The amount of funds ([IMTAccount::Equity](imtaccount_equity.md "Equity")) on the account at the time it reaches the Stop Out level.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.