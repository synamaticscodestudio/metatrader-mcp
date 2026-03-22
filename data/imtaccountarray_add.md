# Add (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts") / [ IMTAccountArray ](imtaccountarray.md "IMTAccountArray")/ Add | [](imtaccountarray_clear.md "Clear") [](imtaccountarray_addcopy.md "AddCopy") |
| --- | --- | --- |
| --- | --- |

IMTAccountArray::Add
Adds an object of a trading account at the end of an array.
C++
MTAPIRES IMTAccountArray::Add( IMTAccount* account // Account to add )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAccountArray.Add( CIMTAccount account // Account to add )  
---  
Parameters
account
[in] Trading account object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method places a pointer to a passed object at the end of an array. After a successful call of this method, the control over the life time of the 'account' object is passed to the array object. Thus, when deleting an array object (call of [IMTAccountArray::Release](imtaccountarray_release.md "Release")), an earlier inserted object is automatically removed.
In turn, the removal of a newly inserted object will cause the pointer stored within the array object to become invalid, and its call (including the case of array object deletion) will cause the crash of the plugin and the server.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
IMTAccountArray::Add
Adds an array of objects of trading accounts at the end of the array.
C++
MTAPIRES IMTAccountArray::Add( IMTAccountArray* array // An array of trading accounts that is being added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAccountArray.Add( CIMTAccountArray array // An array of trading accounts that is being added )  
---  
Parameters
array
[in] An object of the array of trading accounts.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method places the pointers, which are in the array object, at the end of the current array and clears the array object.
After a successful call of this method, control of objects that earlier belonged to the array object is passed to the current array object. The array object is cleared (call of [IMTAccountArray::Total](imtaccountarray_total.md "Total") returns 0). When deleting the current array object (call of [IMTAccountArray::Release](imtaccountarray_release.md "Release")), earlier inserted objects are automatically removed.
In turn, the removal of a newly inserted object will cause the pointer stored within the current array object to become invalid, and its call (including the case of array object deletion) will cause the crash of the plugin and the server. Use [IMTAccountArray::Delete](imtaccountarray_delete.md "Delete") method to delete the element correctly.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
Example
//--- Example IMTAccountArray *array=api->UserCreateAccountArray();  IMTAccount *account=api->UserCreateAccount(); //--- array->Add(account); // After that the lifetime is controlled by an array array->Delete(0); // Delete the first element, and the pointer in order becomes invalid (Release was called) //--- An example of incorrect use IMTAccountArray *array=api->UserCreateAccountArray();  IMTAccount *account=api->UserCreateAccount(); //--- array->Add(account); array->Add(account); // In this case the array contains two pointers to the same object! //--- Releasing the object will cause crash, because it will try to delete an object twice  
---