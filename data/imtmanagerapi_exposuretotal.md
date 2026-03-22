# ExposureTotal (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Exposure ](imtmanagerapi_exposure.md "Exposure Functions")/ ExposureTotal | [](imtmanagerapi_exposurecurrency.md "ExposureCurrency") [](imtmanagerapi_exposurenext.md "ExposureNext") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ExposureTotal
Get the number of records in the exposure table.
C++
UINT IMTManagerAPI::ExposureTotal()  
---  
.NET
uint CIMTManagerAPI.ExposureTotal()  
---  
Python
ManagerAPI.ExposureTotal()  
---  
Return Value
The number of records in the exposure table.
Note
The number of records returned by the method includes the result (total) record from the exposure table (as a symbol with empty name).