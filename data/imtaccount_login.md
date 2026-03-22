# Login (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts") / [ IMTAccount ](imtaccount.md "IMTAccount")/ Login | [](imtaccount_clear.md "Clear") [](imtaccount_currencydigits.md "CurrencyDigits") |
| --- | --- | --- |
| --- | --- |

IMTAccount::Login
Get the login of the client, to whom the trading account belongs.
C++
UINT64 IMTAccount::Login() const  
---  
.NET (Gateway/Manager API)
ulong CIMTAccount.Login()  
---  
Return Value
The login of the client, to whom the trading account belongs.
IMTAccount::Login
Set the login of the client, to whom the trading account belongs.
C++
MTAPIRES IMTAccount::Login( const UINT64 login // Login )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAccount.Login( ulong login // Login )  
---  
Parameters
login
[in] The login of the client, to whom the trading account belongs.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.