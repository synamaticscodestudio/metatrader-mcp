# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts") / [ IMTAccount ](imtaccount.md "IMTAccount")/ Assign | [](imtaccount_release.md "Release") [](imtaccount_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTAccount::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTAccount::Assign( const IMTAccount* user // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAccount.Assign( CIMTAccount user // Source object )  
---  
Parameters
user
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.