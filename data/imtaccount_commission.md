# Commission (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts") / [ IMTAccount ](imtaccount.md "IMTAccount")/ Commission | [](imtaccount_storage.md "Storage") [](imtaccount_floating.md "Floating") |
| --- | --- | --- |
| --- | --- |

IMTAccount::Commission
Get the size of commissions charged for all transactions on the account.
C++
double IMTAccount::Commission() const  
---  
.NET (Gateway/Manager API)
double CIMTAccount.Commission()  
---  
Return Value
The size of commissions charged for all transactions on the account.
Note
The field is deprecated and is no longer used.
IMTAccount::Commission
Set the size of commissions charged for all transactions on the account.
C++
MTAPIRES IMTAccount::Commission( const double storage // Commission )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAccount.Commission( double storage // Commission )  
---  
Parameters
storage
[in] The size of commissions charged for all transactions on the account.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The field is deprecated and is no longer used.