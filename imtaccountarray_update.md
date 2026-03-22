# Update (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts") / [ IMTAccountArray ](imtaccountarray.md "IMTAccountArray")/ Update | [](imtaccountarray_detach.md "Detach") [](imtaccountarray_updatecopy.md "UpdateCopy") |
| --- | --- | --- |
| --- | --- |

IMTAccountArray::Update
Changes a trading account at the specified position of an array.
C++
MTAPIRES IMTAccountArray::Update( const UINT pos, // Position IMTAccount* user // An object of a trading account )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAccountArray.Update( uint pos, // Position CIMTAccount user // An object of a trading account )  
---  
Parameters
pos
[in] Position of the trading account in an array, starting with 0.
user
[in] Trading account object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The IMTAccountArray::Update method deletes the previous element (call of [IMTAccount::Release](imtaccount_release.md "Release")) and replaces it with a new one. After that, the lifetime of a new element is controlled by an array object. Thus, when deleting an array object (call of IMTAccountArray::Release), an earlier inserted object is automatically removed.
In turn, the removal of a previously inserted object will cause the pointer to it, which is stored inside an array object, to be no longer valid. Therefore, call to this pointer (including the case of array object deletion) will cause the crash of the plugin and the server.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
Example
//--- Example IMTAccountrArray *array =api->UserCreateArray();  IMTAccount *account1=api->UserCreateAccount(); IMTAccount *account2=api->UserCreateAccount(); //--- array->Add(account1); array->Update(0,account2); // The first element (object account1) is replaced by account2 //--- After that the account1 element will be released using Release, and the account2 lifetime will be controlled by the array  
---