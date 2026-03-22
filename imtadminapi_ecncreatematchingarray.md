# ECNCreateMatchingArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ ECN ](imtadminapi_ecn.md "ECN")/ ECNCreateMatchingArray | [](imtadminapi_ecncreatematching.md "ECNCreateMatching") [](imtadminapi_ecncreatefilling.md "ECNCreateFilling") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ECNCreateMatchingArray
Create an array of matching order objects.
C++
IMTECNMatchingArray* IMTAdminAPI::ECNCreateMatchingArray()  
---  
.NET
CIMTECNMatchingArray CIMTAdminAPI.ECNCreateMatchingArray()  
---  
Return Value
The function returns a pointer to the created object that implements the [IMTECNMatchingArray](imtecnmatchingarray.md "IMTECNMatchingArray") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTECNMatchingArray::Release](imtecnmatchingarray_release.md "Release") method of this object.