# ECNCreateFillingArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ ECN ](imtmanagerapi_ecn.md "ECN")/ ECNCreateFillingArray | [](imtmanagerapi_ecncreatefilling.md "ECNCreateFilling") [](imtmanagerapi_ecncreateprovider.md "ECNCreateProvider") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ECNCreateFillingArray
Create an array of filling objects.
C++
IMTECNFillingArray* IMTManagerAPI::ECNCreateFillingArray()  
---  
.NET
CIMTECNFillingArray CIMTManagerAPI.ECNCreateFillingArray()  
---  
Return Value
The function returns a pointer to the created object that implements the [IMTECNFillingArray](imtecnfillingarray.md "IMTECNFillingArray") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTECNFillingArray::Release](imtecnfillingarray_release.md "Release") method of this object.