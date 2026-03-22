# Balance (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts") / [ IMTAccount ](imtaccount.md "IMTAccount")/ Balance | [](imtaccount_currencydigits.md "CurrencyDigits") [](imtaccount_credit.md "Credit") |
| --- | --- | --- |
| --- | --- |

IMTAccount::Balance
Get the balance of a trading account.
C++
double IMTAccount::Balance() const  
---  
.NET (Gateway/Manager API)
double CIMTAccount.Balance()  
---  
Return Value
The current balance of a trading account.
IMTAccount::Balance
Set the balance of a trading account.
C++
MTAPIRES IMTAccount::Balance( const double balance // Balance )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAccount.Balance( double balance // Balance )  
---  
Parameters
balance
The balance of a trading account.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.