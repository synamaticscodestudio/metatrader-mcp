# AddCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts") / [ IMTAccountArray ](imtaccountarray.md "IMTAccountArray")/ AddCopy | [](imtaccountarray_add.md "Add") [](imtaccountarray_delete.md "Delete") |
| --- | --- | --- |
| --- | --- |

IMTAccountArray::AddCopy
Adds a copy of an object of a trading account at the end of an array.
C++
MTAPIRES IMTAccountArray::AddCopy( const IMTAccount* account // Account to add )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAccountArray.AddCopy( CIMTAccount account // Account to add )  
---  
Parameters
account
[in] Trading account object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method creates a copy of the 'account' object and places it at the end of the array.
Unlike [IMTAccountArray::Add(IMTAccount* account)](imtaccountarray_add.md "Add"), calling this method does not set any additional conditions for the control of the 'account' object, but is more resource-intensive, since an additional object is created.
IMTAccountArray::AddCopy
Adds copies of the objects of client records to an array.
C++
MTAPIRES IMTAccountArray::AddCopy( const IMTAccountArray* array // An array of trading accounts that is being added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAccountArray.AddCopy( CIMTAccountArray  array // An array of trading accounts that is being added )  
---  
Parameters
array
[in] An object of the array of trading accounts.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method creates copies of objects of trading accounts belonging to the 'array' object, and inserts them at the end of the current array.
Unlike [IMTAccountArray::Add(IMTAccountArray* array)](imtaccountarray_add.md "Add") method, calling this method does not change the source array object, but is more resource-intensive, since additional objects are created.