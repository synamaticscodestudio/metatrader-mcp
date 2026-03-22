# Update (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDealArray ](imtdealarray.md "IMTDealArray")/ Update | [](imtdealarray_detach.md "Detach") [](imtdealarray_updatecopy.md "UpdateCopy") |
| --- | --- | --- |
| --- | --- |

IMTDealArray::Update
Changes a deal at the specified position of an array.
C++
MTAPIRES IMTDealArray::Update( const UINT pos, // Position IMTDeal* deal // An object of a deal )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDealArray.Update( uint  pos, // Position CIMTDeal deal // An object of a deal )  
---  
Parameters
pos
[in] Position of a deal in an array, starting with 0.
deal
[in] An object of a deal.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The IMTDealArray::Update method deletes the previous element (call of [IMTDeal::Release](imtdeal_release.md "Release")) and replaces it with a new one. After that, the lifetime of a new element is controlled by an array object. Thus, when deleting an array object (call of IMTDealArray::Release), an earlier inserted object is automatically removed.
In turn, the removal of a previously inserted object will cause the pointer to it, which is stored inside an array object, to be no longer valid. Therefore, call to this pointer (including the case of array object deletion) will cause the crash of the plugin and the server.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
Example
//--- Example IMTDealArray *array=api->DealCreateArray();  IMTDeal *deal1=api->DealCreate(); IMTDeal *deal2=api->DealCreate(); //--- array->Add(deal1); array->Update(0,deal2); // The first element (object deal1) is replaced by deal2 //--- After that the deal1 element will be released using Release, and the deal2 lifetime will be controlled by the array  
---