# UserCreateArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Users ](imtadminapi_user.md "Functions")/ UserCreateArray | [](imtadminapi_usercreate.md "UserCreate") [](imtadminapi_useradd.md "UserAdd") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::UserCreateArray
Create an object of an array of client records.
C++
IMTUserArray* IMTAdminAPI::UserCreateArray()  
---  
.NET
CIMTUserArray CIMTAdminAPI.UserCreateArray()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTUserArray](imtuserarray.md "IMTUserArray") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTUserArray::Release](imtuserarray_release.md "Release") method of this object.