# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Holidays ](config_holiday.md "Holidays") / [ IMTConHoliday ](imtconholiday.md "IMTConHoliday")/ Assign | [](imtconholiday_release.md "Release") [](imtconholiday_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConHoliday::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConHoliday::Assign( const IMTConHoliday* holiday // Source objects )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConHoliday.Assign( CIMTConHoliday holiday // Source objects )  
---  
Parameters
holiday
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.