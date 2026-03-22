# Mode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Holidays ](config_holiday.md "Holidays") / [ IMTConHoliday ](imtconholiday.md "IMTConHoliday")/ Mode | [](imtconholiday_description.md "Description") [](imtconholiday_year.md "Year") |
| --- | --- | --- |
| --- | --- |

IMTConHoliday::Mode
Get the state of a holiday.
C++
UINT IMTConHoliday::Mode() const  
---  
.NET (Gateway/Manager API)
uint CIMTConHoliday.Mode()  
---  
Python (Manager API)
MTConHoliday.Mode  
---  
Return Value
One of the values of the [IMTConHoliday::EnHolidayMode](imtconholiday_enum.htm#enholidaymode) enumeration.
IMTConHoliday::Mode
Set the state of a holiday.
C++
MTAPIRES IMTConHoliday::Mode( const UINT mode // State of a holiday )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConHoliday.Mode( UINT mode // State of a holiday )  
---  
Python (Manager API)
MTConHoliday.Mode  
---  
Parameters
mode
[in] The state of a holiday. The state is passed using the [IMTConHoliday::EnHolidayMode](imtconholiday_enum.htm#enholidaymode) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.