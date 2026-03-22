# ECNCreateFillingArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ ECN ](imtadminapi_ecn.md "ECN")/ ECNCreateFillingArray | [](imtadminapi_ecncreatefilling.md "ECNCreateFilling") [](imtadminapi_ecncreateprovider.md "ECNCreateProvider") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ECNCreateFillingArray
Create an array of filling objects.
C++
IMTECNFillingArray* IMTAdminAPI::ECNCreateFillingArray()  
---  
.NET
CIMTECNFillingArray CIMTAdminAPI.ECNCreateFillingArray()  
---  
Return Value
The function returns a pointer to the created object that implements the [IMTECNFillingArray](imtecnfillingarray.md "IMTECNFillingArray") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTECNFillingArray::Release](imtecnfillingarray_release.md "Release") method of this object.