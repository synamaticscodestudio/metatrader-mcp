# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Online Connections ](reference_online.md "Online Connections") / [ IMTOnlineArray ](imtonlinearray.md "IMTOnlineArray")/ Clear | [](imtonlinearray_assign.md "Assign") [](imtonlinearray_add.md "Add") |
| --- | --- | --- |
| --- | --- |

IMTOnlineArray::Clear
Clear an object.
C++
MTAPIRES IMTOnlineArray::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOnlineArray.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.