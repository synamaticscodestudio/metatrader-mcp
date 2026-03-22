# ECNCreateMatchingArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ ECN ](imtmanagerapi_ecn.md "ECN")/ ECNCreateMatchingArray | [](imtmanagerapi_ecncreatematching.md "ECNCreateMatching") [](imtmanagerapi_ecncreatefilling.md "ECNCreateFilling") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ECNCreateMatchingArray
Create an array of matching order objects.
C++
IMTECNMatchingArray* IMTManagerAPI::ECNCreateMatchingArray()  
---  
.NET
CIMTECNMatchingArray CIMTManagerAPI.ECNCreateMatchingArray()  
---  
Return Value
The function returns a pointer to the created object that implements the [IMTECNMatchingArray](imtecnmatchingarray.md "IMTECNMatchingArray") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTECNMatchingArray::Release](imtecnmatchingarray_release.md "Release") method of this object.