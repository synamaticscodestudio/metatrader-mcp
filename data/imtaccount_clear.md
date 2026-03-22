# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts") / [ IMTAccount ](imtaccount.md "IMTAccount")/ Clear | [](imtaccount_assign.md "Assign") [](imtaccount_login.md "Login") |
| --- | --- | --- |
| --- | --- |

IMTAccount::Clear
Clear an object.
C++
MTAPIRES IMTAccount::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAccount.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.