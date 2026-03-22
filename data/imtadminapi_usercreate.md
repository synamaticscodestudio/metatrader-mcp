# UserCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Users ](imtadminapi_user.md "Functions")/ UserCreate | [](imtadminapi_user_enum.md "Enumerations") [](imtadminapi_usercreatearray.md "UserCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::UserCreate
Create an object of a client record.
C++
IMTUser* IMTAdminAPI::UserCreate()  
---  
.NET
CIMTUser CIMTAdminAPI.UserCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTUser](imtuser.md "IMTUser") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTUser::Release](imtuser_release.md "Release") method of this object.