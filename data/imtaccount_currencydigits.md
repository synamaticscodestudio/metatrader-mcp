# CurrencyDigits (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts") / [ IMTAccount ](imtaccount.md "IMTAccount")/ CurrencyDigits | [](imtaccount_login.md "Login") [](imtaccount_balance.md "Balance") |
| --- | --- | --- |
| --- | --- |

IMTAccount::CurrencyDigits
Get the number of decimal places in the account deposit currency.
C++
UINT IMTAccount::CurrencyDigits() const  
---  
.NET (Gateway/Manager API)
uint CIMTAccount.CurrencyDigits()  
---  
Return Value
Number of decimal places.
IMTAccount::CurrencyDigits
Set the number of decimal places in the account deposit currency.
C++
MTAPIRES IMTAccount::CurrencyDigits( const UNIT digits // Accuracy )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAccount.CurrencyDigits( uint digits // Accuracy )  
---  
Parameters
digits
[in] Number of decimal places.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.