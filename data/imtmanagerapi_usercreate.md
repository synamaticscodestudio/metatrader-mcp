# UserCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Users ](imtmanagerapi_user.md "User Functions")/ UserCreate | [](imtmanagerapi_user_enum.md "Enumerations") [](imtmanagerapi_usercreatearray.md "UserCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::UserCreate
Create an object of a client record.
C++
IMTUser* IMTManagerAPI::UserCreate()  
---  
.NET
CIMTUser CIMTManagerAPI.UserCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTUser](imtuser.md "IMTUser") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTUser::Release](imtuser_release.md "Release") method of this object.