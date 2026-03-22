# SOMargin (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts") / [ IMTAccount ](imtaccount.md "IMTAccount")/ SOMargin | [](imtaccount_soequity.md "SOEquity") [](imtaccount_blockedcommission.md "BlockedCommission") |
| --- | --- | --- |
| --- | --- |

IMTAccount::SOMargin
Get the margin amount on an account at the time of reaching the Stop Out level.
C++
double IMTAccount::SOMargin() const  
---  
.NET (Gateway/Manager API)
double CIMTAccount.SOMargin()  
---  
Return Value
The volume of [margin](imtaccount_margin.md "Margin") on the account at the time it reaches the Stop Out level.
IMTAccount::SOMargin
Set the margin amount on an account at the time of reaching the Stop Out level.
C++
MTAPIRES IMTAccount::SOMargin( const double margin // Margin )  
---  
.NET (Gateway/Manager API)
MTAPIRES CIMTAccount.SOMargin( double margin // Margin )  
---  
Parameters
margin
[in] The margin amount on an account at the time of reaching the Stop Out level.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.