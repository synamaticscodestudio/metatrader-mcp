# ExposureCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Exposure ](imtmanagerapi_exposure.md "Exposure Functions")/ ExposureCreate | [](imtmanagerapi_exposure.md "Exposure Functions") [](imtmanagerapi_exposurecreatearray.md "ExposureCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ExposureCreate
Create an object of an exposure record.
C++
IMTExposure* IMTManagerAPI::ExposureCreate()  
---  
.NET
CIMTExposure CIMTManagerAPI.ExposureCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTExposure](imtexposure.md "IMTExposure") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTExposure::Release](imtexposure_release.md "Release") method of this object.