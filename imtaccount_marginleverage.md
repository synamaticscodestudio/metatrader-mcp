# MarginLeverage (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts") / [ IMTAccount ](imtaccount.md "IMTAccount")/ MarginLeverage | [](imtaccount_marginlevel.md "MarginLevel") [](imtaccount_margininitial.md "MarginInitial") |
| --- | --- | --- |
| --- | --- |

IMTAccount::MarginLeverage
Get the margin leverage.
C++
UINT IMTAccount::MarginLeverage() const  
---  
.NET (Gateway/Manager API)
uint CIMTAccount.MarginLeverage()  
---  
Return Value
Margin leverage.
IMTAccount::MarginLeverage
Set the margin leverage.
C++
MTAPIRES IMTAccount::MarginLeverage( const UINT leverage // Leverage )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAccount.MarginLeverage( uint leverage // Leverage )  
---  
Parameters
leverage
[in] Margin leverage.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.