# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Assets ](trading_exposure.md "Assets") / [ IMTExposure ](imtexposure.md "IMTExposure")/ Clear | [](imtexposure_assign.md "Assign") [](imtexposure_symbol.md "Symbol") |
| --- | --- | --- |
| --- | --- |

IMTExposure::Clear
Clear an object.
C++
MTAPIRES IMTExposure::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExposure.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.