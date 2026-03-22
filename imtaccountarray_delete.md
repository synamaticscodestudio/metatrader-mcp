# Delete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts") / [ IMTAccountArray ](imtaccountarray.md "IMTAccountArray")/ Delete | [](imtaccountarray_addcopy.md "AddCopy") [](imtaccountarray_detach.md "Detach") |
| --- | --- | --- |
| --- | --- |

IMTAccountArray::Delete
Deletes an object of a trading account by position.
C++
MTAPIRES IMTAccountArray::Delete( const UINT pos // Position of the trading account )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAccountArray.Delete( uint pos // Position of the trading account )  
---  
Parameters
pos
[in] Position of the trading account in an array, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The object to delete will be automatically released by calling the [IMTAccount::Release](imtaccount_release.md "Release") method.