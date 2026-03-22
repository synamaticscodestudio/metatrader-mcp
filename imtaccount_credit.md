# Credit (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts") / [ IMTAccount ](imtaccount.md "IMTAccount")/ Credit | [](imtaccount_balance.md "Balance") [](imtaccount_margin.md "Margin") |
| --- | --- | --- |
| --- | --- |

IMTAccount::Credit
Get the current amount of credit given to an account.
C++
double IMTAccount::Credit() const  
---  
.NET (Gateway/Manager API)
double CIMTAccount.Credit()  
---  
Return Value
The current amount of credit given to an account.
Note
Client's credit funds are the total sum of all operations of the "Credit" ([EnDealAction::DEAL_CREDIT](imtdeal_enum.htm#endealaction)) and "Bonus" ([EnDealAction::DEAL_BONUS](imtdeal_enum.htm#endealaction)).
IMTAccount::Credit
Set the current amount of credit given to an account.
C++
MTAPIRES IMTAccount::Credit( const double credit // Amount of credit )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAccount.Credit( double credit // Amount of credit )  
---  
Parameters
credit
[in] The amount of money credited to the account.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Client's credit funds are the total sum of all operations of the "Credit" ([EnDealAction::DEAL_CREDIT](imtdeal_enum.htm#endealaction)) and "Bonus" ([EnDealAction::DEAL_BONUS](imtdeal_enum.htm#endealaction)).