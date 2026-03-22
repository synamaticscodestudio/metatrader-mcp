# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts") / [ IMTAccountArray ](imtaccountarray.md "IMTAccountArray")/ Clear | [](imtaccountarray_assign.md "Assign") [](imtaccountarray_add.md "Add") |
| --- | --- | --- |
| --- | --- |

IMTAccountArray::Clear
Clear an object.
C++
MTAPIRES IMTAccountArray::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAccountArray.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.