# ExposureCreateArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Exposure ](imtmanagerapi_exposure.md "Exposure Functions")/ ExposureCreateArray | [](imtmanagerapi_exposurecreate.md "ExposureCreate") [](imtmanagerapi_exposuresubscribe.md "ExposureSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ExposureCreateArray
Create an array of objects of exposure records.
C++
IMTExposureArray* IMTManagerAPI::ExposureCreateArray()  
---  
.NET
CIMTExposureArray CIMTManagerAPI.ExposureCreateArray()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTExposureArray](imtexposurearray.md "IMTExposureArray") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTExposureArray::Release](imtexposurearray_release.md "Release") method of this object.