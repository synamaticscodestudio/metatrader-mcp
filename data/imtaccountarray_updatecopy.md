# UpdateCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts") / [ IMTAccountArray ](imtaccountarray.md "IMTAccountArray")/ UpdateCopy | [](imtaccountarray_update.md "Update") [](imtaccountarray_shift.md "Shift") |
| --- | --- | --- |
| --- | --- |

IMTAccountArray::UpdateCopy
Changes a trading account at the specified position of an array by copying the parameters of a passed object of the trading account.
C++
MTAPIRES IMTAccountArray::UpdateCopy( const UINT  pos, // Position const IMTAccount* user // An object of a trading account )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAccountArray.UpdateCopy( uint  pos, // Position CIMTAccount  user // An object of a trading account )  
---  
Parameters
pos
[in] Position of the trading account in an array, starting with 0.
order
[in] Trading account object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method copies the parameters of the 'account' object into an order object at the specified position of an array.
Unlike [IMTAccountArray::Update](imtaccountarray_update.md "Update"), calling this method does not set any additional conditions for the control of the online object, but is more resource-intensive, since an additional object is created.