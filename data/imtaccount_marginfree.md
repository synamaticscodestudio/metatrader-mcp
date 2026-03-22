# MarginFree (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts") / [ IMTAccount ](imtaccount.md "IMTAccount")/ MarginFree | [](imtaccount_margin.md "Margin") [](imtaccount_marginlevel.md "MarginLevel") |
| --- | --- | --- |
| --- | --- |

IMTAccount::MarginFree
Get the free margin of an account.
C++
double IMTAccount::MarginFree() const  
---  
.NET (Gateway/Manager API)
double CIMTAccount.MarginFree()  
---  
Return Value
The free margin of an account.
IMTAccount::MarginFree
Set the free margin of an account.
C++
MTAPIRES IMTAccount::MarginFree( const double margin_free // Free margin )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAccount.MarginFree( double margin_free // Free margin )  
---  
Parameters
margin_free
[in] The free margin of an account.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.