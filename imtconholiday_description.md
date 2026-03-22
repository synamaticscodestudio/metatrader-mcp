# Description (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Holidays ](config_holiday.md "Holidays") / [ IMTConHoliday ](imtconholiday.md "IMTConHoliday")/ Description | [](imtconholiday_clear.md "Clear") [](imtconholiday_mode.md "Mode") |
| --- | --- | --- |
| --- | --- |

IMTConHoliday::Description
Get the description of a holiday.
C++
LPCWSTR IMTConHoliday::Description() const  
---  
.NET (Gateway/Manager API)
string CIMTConHoliday.Description()  
---  
Python (Manager API)
MTConHoliday.Description  
---  
Return Value
If successful, it returns a pointer to a string with the description of a holiday. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConHoliday](imtconholiday.md "IMTConHoliday") object.
To use the string after the object removal (call of the [IMTConHoliday::Release](imtconholiday_release.md "Release") method of this object), a copy of it should be created.
IMTConHoliday::Description
Set the description of a holiday.
C++
MTAPIRES IMTConHoliday::Description( LPCWSTR descr // Holiday description )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConHoliday.Description( string descr // Holiday description )  
---  
Python (Manager API)
MTConHoliday.Description  
---  
Parameters
descr
[in] Description of a holiday.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum description length is 128 characters (with the sign of the string end). If a string of a greater length is assigned, it will be cut to this length.