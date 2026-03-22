# SOLevel (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts") / [ IMTAccount ](imtaccount.md "IMTAccount")/ SOLevel | [](imtaccount_sotime.md "SOTime") [](imtaccount_soequity.md "SOEquity") |
| --- | --- | --- |
| --- | --- |

IMTAccount::SOLevel
Get the margin level of an account at the time of reaching the Stop Out level.
C++
double IMTAccount::SOLevel() const  
---  
.NET (Gateway/Manager API)
double CIMTAccount.SOLevel()  
---  
Return Value
[The margin level](imtaccount_marginlevel.md "MarginLevel") of an account at the time it reaches the Stop Out level.
IMTAccount::SOLevel
Set the margin level of an account at the time of reaching the Stop Out level.
C++
MTAPIRES IMTAccount::SOLevel( const double level // Margin level )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAccount.SOLevel( double level // Margin level )  
---  
Parameters
level
[In] The margin level of an account at the time it reaches the Stop Out level.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.