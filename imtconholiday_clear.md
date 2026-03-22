# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Holidays ](config_holiday.md "Holidays") / [ IMTConHoliday ](imtconholiday.md "IMTConHoliday")/ Clear | [](imtconholiday_assign.md "Assign") [](imtconholiday_description.md "Description") |
| --- | --- | --- |
| --- | --- |

IMTConHoliday::Clear
Clear an object.
C++
MTAPIRES IMTConHoliday::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConHoliday.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.