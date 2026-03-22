# UserCreateArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Users ](imtmanagerapi_user.md "User Functions")/ UserCreateArray | [](imtmanagerapi_usercreate.md "UserCreate") [](imtmanagerapi_usercreateaccount.md "UserCreateAccount") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::UserCreateArray
Create an object of an array of client records.
C++
IMTUserArray* IMTManagerAPI::UserCreateArray()  
---  
.NET
CIMTUserArray CIMTManagerAPI.UserCreateArray()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTUserArray](imtuserarray.md "IMTUserArray") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTUserArray::Release](imtuserarray_release.md "Release") method of this object.