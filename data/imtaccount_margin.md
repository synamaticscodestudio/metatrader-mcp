# Margin (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts") / [ IMTAccount ](imtaccount.md "IMTAccount")/ Margin | [](imtaccount_credit.md "Credit") [](imtaccount_marginfree.md "MarginFree") |
| --- | --- | --- |
| --- | --- |

IMTAccount::Margin
Get the current value of the account margin.
C++
double IMTAccount::Margin() const  
---  
.NET (Gateway/Manager API)
double CIMTAccount.Margin()  
---  
Return Value
The current amount of the account funds reserved for maintaining trade positions
IMTAccount::Margin
Set the current value of the account margin.
C++
MTAPIRES IMTAccount::Margin( const double margin // Margin )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAccount.Margin( double margin // Margin )  
---  
Parameters
margin
[in] The amount of the account funds reserved for maintaining trade positions.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.